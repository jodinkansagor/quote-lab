import React from 'react';
import Button from '../components/Button';
import Quote from '../components/Quote';
import styles from '../components/QuoteFetcherFN.css';
import { useQuotes } from '../hooks/quotes';

const QuoteFetcherFN = () => {
  const { quote, getNewQuote } = useQuotes();

  const handleClick = () => {
    getNewQuote();
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






