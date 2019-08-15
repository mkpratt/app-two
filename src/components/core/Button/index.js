import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledButton,
  StyledButtonLink,
} from './styles'

/**
 * Multifunctional button
 * @property {object} children - Button's content
 * @property {boolean} disabled - Disable button
 * @property {object} icon - Add an icon element
 * @property {string} label - Button's text content
 * @property {string} link - React-router link
 * @property {string} loader - Loader component. When present, button's visual state changes to "isLoading"
 * @property {function} onlick - Optional Click handler
 * @property {string} type - Button's HTML5 type override (button | submit | reset)
 *
 * Visual modifiers through props:
 * @property {boolean} block - 100% width
 * @property {boolean} danger - DANGER colors
 * @property {boolean} fat - FAT padding
 * @property {boolean} outline - Just think borders
 * @property {boolean} secondary - Secondary background color
 * @property {boolean} small - Small size

 *
 * @render react
 * @name Button
 * @example
 * <Button
 *   label="Test button"
 *   block
 *   secondary
 * />
 */
const Button = ({
  children,
  disabled,
  icon,
  label,
  link,
  loader,
  onClick,
  type,
  ...rest
}) => {
  // Component type switch for redux Link
  const ButtonComponent = link ? StyledButtonLink : StyledButton

  return (
    <ButtonComponent
      disabled={disabled}
      isLoading={Boolean(loader)}
      onClick={onClick}
      to={link}
      type={type}
      {...rest}
    >
      {loader && <span>{loader}</span>}
      {icon && <span>{icon}</span>}
      {label && <span>{label}</span>}
      {children && <span>{children}</span>}
    </ButtonComponent>
  )
}

Button.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.node,
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  fat: PropTypes.bool,
  icon: PropTypes.object,
  label: PropTypes.string,
  link: PropTypes.string,
  loader: PropTypes.object,
  onClick: PropTypes.func,
  secondary: PropTypes.bool,
  small: PropTypes.bool,
  type: PropTypes.string,
}

Button.defaultProps = {
  block: null,
  children: null,
  danger: null,
  disabled: null,
  fat: null,
  icon: null,
  label: '',
  loader: null,
  onClick: () => {},
  link: null,
  secondary: null,
  small: null,
  type: null,
}

export default Button
