import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'

import { loginUser } from '../../../actions/authActions'

import Input from '../../core/Input'
import Button from '../../core/Button'
import { FormRow } from '../../core/Form/styles'

class Login extends Component {

  constructor() {
    super()
    
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      // push user to dashboard when they login
      this.props.history.push('/dashboard')
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      })
    }
  }

  handleChange = e => {
    delete this.state.errors[e.target.id]
    this.setState({
      [e.target.id]: e.target.value,
      errors: this.state.errors,
    })
  }

  onSubmit = e => {
    e.preventDefault()
    const userData = {
      email: this.state.email,
      password: this.state.password
    }

    // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    this.props.loginUser(userData)
  }

  render() {
    const { errors } = this.state
    return (
      <div className='flex-content col-h-center col-v-center'>
        <form noValidate onSubmit={this.onSubmit}>
          <FormRow>
            <Input
              id='email'
              type='text'
              name='email'
              label='Email'
              value={this.state.email}
              error={errors.email}
              onChange={this.handleChange}
              className={classnames('', {
                invalid: errors.email || errors.emailnotfound
              })}
            />
          </FormRow>
          <FormRow>
            <Input
              id='password'
              type='password'
              name='password'
              label='Password'
              value={this.state.password}
              error={errors.password}
              onChange={this.handleChange}
              className={classnames('', {
                invalid: errors.password
              })}
            />
          </FormRow>
          <FormRow>
            <Button
              type='submit'
              // disabled={!isValid || isLoading}
              block
            >
              Log in
            </Button>
          </FormRow>
        </form>
        <p className='grey-text text-darken-1'>
          Don't have an account? <Link to='/register'>Register</Link>
        </p>
        <p className='grey-text text-darken-1'>
          <Link to='/forgot-password'>Forgot password?</Link>
        </p>
      </div>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { loginUser }
)(Login)
