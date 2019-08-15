import styled from 'styled-components'
// import { darken } from 'polished'
import { Link } from 'react-router-dom'

import variables from '../../../styles/variables'


export const StyledButton = styled.button`
  display: inline-block;
  border-radius: 5px;
  padding: 20px 30px;
  user-select: none;

  background: ${variables.colors.medium};
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 400;
  font-size: 0.8em;

  cursor: pointer;

  ${({ block }) => block && `
    text-align: center;
    width: 100%;
  `}

  ${({ fat }) => fat && `
    padding-left: 75px;
    padding-right: 75px;
  `}

  ${({ small }) => small && `
    padding: 10px 15px;
  `}

  &:hover,
  &:focus {
    background: ${variables.colors.medium};
  }

  ${({ danger }) => danger && `
    background: ${variables.colors.danger};

    &:hover,
    &:focus {
      background: ${variables.colors.danger};
    }
  `}

  ${({ outline }) => outline && `
    background: transparent;
    border: 1px solid ${variables.colors.medium};
    color: ${variables.colors.medium};

    &:hover,
    &:focus {
      border-color: ${variables.colors.medium};
      color: ${variables.colors.medium};
    }
  `}

  ${({ secondary }) => secondary && `
    background: white;
    border: 1px solid ${variables.colors.medium};
    color: ${variables.colors.medium};

    &:hover,
    &:focus {
      background: ${variables.colors.medium};
      color: white;
    }
  `}

  ${({ disabled }) => disabled && `
    background: ${variables.colors.light};
    cursor: default;

    &:hover,
    &:focus {
      background: ${variables.colors.light};
    }
  `}
`

export const StyledButtonLink = StyledButton.withComponent(Link)
