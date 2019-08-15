import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'
import {
  GET_ERRORS,
  GET_MESSAGES,
  EMAIL,
  USER_LOADING,
  SET_CURRENT_USER,
} from './types'

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(res => history.push('/login')) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    )
}

// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post('/api/users/login', userData)
    .then(res => {
      // Save to localStorage
      // Set token to localStorage
      const { token } = res.data
      localStorage.setItem('jwtToken', token)
      // Set token to Auth header
      setAuthToken(token)
      // Decode token to get user data
      const decoded = jwt_decode(token)
      // Set current user
      dispatch(setCurrentUser(decoded))
    })
    .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
          // payload: err,
        })
      }
    )
}

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  }
}

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  }
}

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem('jwtToken')
  // Remove auth header for future requests
  setAuthToken(false)
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}))
}

export const forgotPassword = email => dispatch => {
  const location = window.location
  axios
    .post('/api/users/forgot-password', { email, location })
    .then(res => {
      dispatch({
        type: GET_MESSAGES,
        payload: res.data,
      })
      dispatch({
        type: GET_ERRORS,
        payload: {},
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
      dispatch({
        type: GET_MESSAGES,
        payload: {},
      })
    })
}

export const validateToken = resetPasswordToken => dispatch => {
  axios
    .get('/api/users/validate-token', { 
      params: {
        resetPasswordToken
      }
    })
    .then(res => {
      dispatch({
        type: EMAIL,
        payload: res.data.email,
      })
      dispatch({
        type: GET_MESSAGES,
        payload: res.data.messages,
      })
      dispatch({
        type: GET_ERRORS,
        payload: {},
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
      dispatch({
        type: GET_MESSAGES,
        payload: {},
      })
    })
}

export const resetPassword = userData => dispatch => {
  axios
    .post('/api/users/reset-password', userData)
    .then(res => {
      dispatch({
        type: GET_MESSAGES,
        payload: res.data,
      })
      dispatch({
        type: GET_ERRORS,
        payload: {},
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
      dispatch({
        type: GET_MESSAGES,
        payload: {},
      })
    })
}
