import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import Quote from '../components/Quote';
import { getFuturama } from '../services/getQuote';

const QuoteFetcherFN = () => {
  const [quote, setQuote] = useState('');


  useEffect(() => {
    getFuturama()
      .then(quote => setQuote(quote));
  }, []);

  const handleClick = ({ target }) => {
    setQuote(target.value);
    console.log(target.value, 'TARGET DOT VALUE');
  };

  return (
    <>
      <Quote {...quote} />
      <Button onClick={handleClick} />
    </>
  );
};

export default QuoteFetcherFN;
