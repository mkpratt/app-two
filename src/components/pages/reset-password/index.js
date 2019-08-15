import React, { Component } from 'react'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'

import { resetPassword, validateToken } from '../../../actions/authActions'

import Input from '../../core/Input'
import Button from '../../core/Button'
import { FormRow } from '../../core/Form/styles'

class ResetPassword extends Component {

  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      update: false,
      isLoading: true,
      errors: {},
      messages: {},
    }
  }

  async componentDidMount() {
    const resetPasswordToken = this.props.match.params.token
    await this.props.validateToken(resetPasswordToken)
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.email) {
      this.setState({
        email: nextProps.email,
      })
    }

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

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }

  updatePassword = e => {
    e.preventDefault()
    
    this.props.resetPassword({
      email: this.state.email,
      password: this.state.password,
    })
  }

  render() {
    const { errors, messages } = this.state

    // if (errors.passwordReset) {
    //   return (
    //     <div>
    //       <p className='grey-text text-darken-1'>
    //         Problem resetting password. Please send another reset link.
    //         <Link to='/forgot-password'>Forgot password?</Link>
    //       </p>
    //     </div>
    //   )
    // } else if (isLoading) {
    //   return (
    //     <div>
    //       <p className='grey-text text-darken-1'>
    //         Loading user data...
    //       </p>
    //     </div>
    //   )
    // } else {
      return (
        <div className='flex-content col-h-center col-v-center'>
          <form noValidate onSubmit={this.updatePassword}>
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
                Update password
              </Button>
            </FormRow>
          </form>
          {messages.passwordUpdateSuccess ? (
            <div>
              <p className='grey-text text-darken-1'>
                Password successfully reset. Try logging in again.<br />
                <Link to='/login'>Log in</Link>
              </p>
            </div>
          ) : (
            <div>
              <p className='grey-text text-darken-1'>
                Nevermind, take me back to <Link to='/login'>log in</Link>.
              </p>
            </div>
          )}
        </div>
      )
    // }
  }
}

ResetPassword.propTypes = {
  validateToken: PropTypes.func.isRequired,
  resetPassword: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  email: state.email,
  errors: state.errors,
  messages: state.messages,
})

export default connect(
  mapStateToProps,
  { validateToken, resetPassword, }
) (ResetPassword)
