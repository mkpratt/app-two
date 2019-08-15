import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { registerUser } from "../../../actions/authActions"
import classnames from "classnames"

import Input from '../../core/Input'
import Button from '../../core/Button'
import { FormRow } from "../../core/Form/styles"

class Register extends Component {

  constructor() {
    super()
    
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    }
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard")
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      })
    }
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }

    this.props.registerUser(newUser, this.props.history)
  }

  render() {
    const { errors } = this.state

    return (
      <div className="flex-content col-h-center col-v-center">
        <form noValidate onSubmit={this.onSubmit}>
          <FormRow>
            <Input
              id="name"
              type="text"
              name="name"
              label="Name"
              value={this.state.name}
              error={errors.name}
              onChange={this.handleChange}
              className={classnames("", {
                invalid: errors.name
              })}
            />
          </FormRow>
          <FormRow>
            <Input
              id="email"
              type="text"
              name="email"
              label="Email"
              value={this.state.email}
              error={errors.email}
              onChange={this.handleChange}
              className={classnames("", {
                invalid: errors.email
              })}
            />
          </FormRow>
          <FormRow>
            <Input
              id="password"
              type="password"
              name="password"
              label="Password"
              value={this.state.password}
              error={errors.password}
              onChange={this.handleChange}
              className={classnames("", {
                invalid: errors.password
              })}
            />
          </FormRow>
          <FormRow>
            <Input
              id="password2"
              type="password"
              name="password2"
              label="Confirm Password"
              value={this.state.password2}
              error={errors.password2}
              onChange={this.handleChange}
              className={classnames("", {
                invalid: errors.password2
              })}
            />
          </FormRow>
          <FormRow>
            <Button
              type="submit"
              // disabled={!isValid || isLoading}
              block
            >
              Sign up
            </Button>
          </FormRow>
        </form>
        <p className="grey-text text-darken-1">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register))
