import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => (
  <button onClick={onClick}>Get Quote</button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Button;
