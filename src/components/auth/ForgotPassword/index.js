import React, { Component } from 'react'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from "classnames"

import { forgotPassword } from '../../../actions/authActions'

import Input from '../../core/Input'
import Button from '../../core/Button'
import { FormRow } from '../../core/Form/styles'

// const title = {
//   pageTitle: 'Forgot Password',
// }

class ForgotPassword extends Component {
  
  constructor() {
    super()

    this.state = {
      email: '',
      errors: {},
      messages: {},
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.messages) {
      this.setState({
        messages: nextProps.messages,
      })
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      })
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  sendEmail = e => {
    e.preventDefault()

    if (this.state.email !== '') {
      this.props.forgotPassword(this.state.email)
    }
  }

  render() {
    const { email, messages, errors } = this.state
    
    return (
      <div className='flex-content col-h-center col-v-center'>
        <form noValidate onSubmit={this.sendEmail}>
          <FormRow>
            <Input 
              id="email"
              type="text"
              name="email"
              label="Email"
              value={email}
              error={errors.email}
              onChange={this.handleChange('email')}
              className={classnames("", {
                invalid: errors.email
              })}
            />
          </FormRow>
          <FormRow>
            <Button
              type="submit"
              // disabled={!isValid || isLoading}
              block
            >
              Request password reset email
            </Button>
          </FormRow>
          {messages.emailSendSuccess && !(errors.email || errors.emailSendError) && (
            <FormRow>
              <p className="grey-text text-darken-1">
                Password reset email successfully sent!<br />
                <Link to="/login">Back to login page</Link>
              </p>
            </FormRow>
          )}
          {errors.emailError && (
            <FormRow>
              <p className="grey-text text-darken-1">
                That email address isn't recognized.<br />
                Please try again or <Link to="/register">register</Link> for a new account
              </p>
            </FormRow>
          )}
        </form>
      </div>
    )
  }
}

ForgotPassword.propTypes = {
  forgotPassword: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  messages: state.messages,
})

export default connect(
  mapStateToProps,
  { forgotPassword }
) (ForgotPassword)
