import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ onClick }) => (
  <button onClick={onClick}>Get Two Random Quotes!</button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Button;
