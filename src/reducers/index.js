import { combineReducers } from 'redux'
import authReducer from './authReducers'
import errorReducer from './errorReducers'
import messageReducer from './messageReducers'
import emailReducer from './emailReducers'

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  messages: messageReducer,
  email: emailReducer
})
