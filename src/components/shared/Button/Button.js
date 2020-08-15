import React from 'react';
import PropTypes from 'prop-types';
import { ButtonVariation } from './Button.style';

const Button = ({ variation, children }) => (
  <ButtonVariation type="button" variation={variation}>
    {children}
  </ButtonVariation>
);

Button.propTypes = {
  variation: PropTypes.oneOf(['primary', 'secondary', 'rounded']),
};

Button.defaultProps = {
  variation: 'primary',
};

export default Button;
