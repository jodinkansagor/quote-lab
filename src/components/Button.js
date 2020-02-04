import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

const Button = ({ onClick }) => (
  <button onClick={onClick}>Get Quote!</button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Button;
