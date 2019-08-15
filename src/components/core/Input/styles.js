import styled from 'styled-components'
import variables from '../../../styles/variables'

export const StyledInputContainer = styled.div`
  position: relative;
  font-size: 1em;
  padding: 20px 0;
`

export const StyledLabelContainer = styled.div`
  position: relative;
`

export const StyledLabel = styled.label`
  position: absolute;
  display: block;
  text-align: left;
  color: ${variables.colors.light};
  font-family: ${variables.typography.baseFont};
  font-weight: 300;
  font-size: 1em;
  line-height: 1em;
  top: 0;
  padding: 7px 0;

  transition: all 0.2s ease;
`

export const StyledInput = styled.input`
  width: 100%;
  padding: 7px 0;
  font-size: 1em;
  line-height: 1em;
  color: ${variables.colors.dark};
  border: none;
  border-bottom: 1px solid ${variables.colors.light};
  background: transparent;
  transition-property: background-color;

  &::placeholder,
  &::-webkit-input-placeholder,
  &::-ms-input-placeholder {
    color: ${variables.colors.light};
  }

  &:-webkit-autofill {
    background-color: transparent;
    /* -webkit-box-shadow: 0 0 0px 1000px white inset; */
  }

  /* Hack for Chrome autofill color */
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition-delay: 99999s;
  }

  &:focus,
  &:active {
    border-bottom-color: ${variables.colors.dark};
    outline: none;
  }

  /* Hack for label positioning, pure CSS magic */
  &:focus,
  &:active,
  &[value]:not([value=""]) {
    & ~ ${StyledLabel} {
      font-size: 0.75em;
      font-weight: 500;
      padding: 0;
      transform: translateY(-100%);
      color: ${variables.colors.dark};
    }
  }

  ${props => props.hasError && `
    &, &:focus, &:active {
      border-bottom-color: ${variables.colors.danger};
    }
  `}

  ${props => props.disabled && `
    color: ${variables.colors.light};
    cursor: not-allowed;
  `}
`

export const StyledMeta = styled.div`
  position: absolute;
  width: 100%;
  top: 4.6em;
  font-size: 0.75em;
  color: ${variables.colors.danger};
  text-align: right;
`
