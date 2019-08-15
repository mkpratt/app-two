import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledInputContainer,
  StyledInput,
  StyledLabelContainer,
  StyledLabel,
  StyledMeta,
} from './styles'

const Input = ({
  // field,
  // form: { touched, errors },
  label,
  // type,
  // ...props
  id,
  name,
  value,
  placeholder,
  error,
  touched,
  hintText,
  type,
  onChange,
  disabled,
  className
}) => {
  const hasError = !!error

  return (
    <StyledInputContainer>
      <StyledLabelContainer>
        <StyledInput
          hasError={hasError}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      </StyledLabelContainer>
      <StyledMeta>
        {hasError && error}
      </StyledMeta>
    </StyledInputContainer>
  )
}

Input.propTypes = {
  // field: PropTypes.object.isRequired,
  // form: PropTypes.object.isRequired,
  label: PropTypes.string,
  // type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  hasError: PropTypes.bool,
  isTouched: PropTypes.bool,
  hintText: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
}

Input.defaultProps = {
  label: '',
  type: 'text',
}

export default Input
