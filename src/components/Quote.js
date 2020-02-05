import React from 'react';
import PropTypes from 'prop-types';
import styles from './Quote.css';

const Quote = ({ text, source }) => (
  <section className={styles.quoteBubble}>
    <h4>&quot;{text}&quot; -- {source}</h4>
  </section>
);

Quote.propTypes = {
  text: PropTypes.string,
  source: PropTypes.string
};

export default Quote;
