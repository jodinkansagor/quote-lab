import React from 'react';
import PropTypes from 'prop-types';
import Radio from './src/components/RadioButton';
import styles from './src/components/RadioButtons.css';

const RadioButtons = ({ radioButtons, onChange }) => {

  const radioButtonElements = radioButtons.map(({ label, value }) => (
    <Radio key={value} name="sources" value={value} label={label} onChange={onChange} />
  ));

  return (
    <section className={styles.radioButtons}>
      {radioButtonElements}
    </section>
  );

};

RadioButtons.propTypes = {
  radioButtons: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
  onChange: PropTypes.func.isRequired
};

export default RadioButtons;
