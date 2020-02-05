import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({ value, label, onChange }) => (
  <section>
    <input type="radio" name="sources" id={value} value={value} onChange={onChange}></input>
    <label htmlFor={value}>{label}</label>
  </section>
);

Radio.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Radio;
