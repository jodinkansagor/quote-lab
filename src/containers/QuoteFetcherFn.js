import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import Quote from '../components/Quote';
import { getFuturama } from '../services/getQuote';
import styles from '../components/QuoteFetcherFN.css';

const QuoteFetcherFN = () => {
  const [quote, setQuote] = useState('');


  useEffect(() => {
    getFuturama()
      .then(quote => setQuote(quote));
  }, []);


  const handleClick = () => {
    getFuturama()
      .then(quote => setQuote(quote));
  };

  return (
    <section className={styles.quotePage}>
      <h3>Markov Twain</h3>
      <p>Get yourself a random quote!</p>
      <Quote {...quote} />
      <Button onClick={handleClick} />
    </section>
  );
};

export default QuoteFetcherFN;
