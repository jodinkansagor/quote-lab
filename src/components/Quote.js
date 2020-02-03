import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ text, source }) => (
  <>
    <h2>&quot;{text}&quot; -- {source}</h2>
  </>
);

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired
};

export default Quote;
