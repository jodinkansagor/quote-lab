import React from 'react';
import Button from '../components/Button';
import Quote from '../components/Quote';
import styles from '../components/QuoteFetcherFN.css';
import { useQuotes, useSourceQuotes } from '../hooks/quotes';
import RadioButtons from '../../RadioButtons';



const QuoteFetcherFN = () => {
  const { sourceQuote, getSourceQuote } = useSourceQuotes('5e1e4ec52d2b701b5aaf0227');

  const radioButtons = [
    { label: 'Mark Twain', value: '5e1e4ec52d2b701b5aaf022a' },
    { label: 'Jane Austin', value: '5e1e4ec52d2b701b5aaf0226' },
    { label: 'Fyodor Dostoevsky', value: '5e1e4ec52d2b701b5aaf0227' },
    { label: 'Edgar Allan Poe', value: '5e1e4ec52d2b701b5aaf0228' },
    { label: 'Lewis Carrol', value: '5e1e4ec52d2b701b5aaf0229' },
    { label: '?', value: ' '}
  ];

  const changeSource = ({ target }) => {
    getSourceQuote(target.value);
  };

  return (
    <section className={styles.quotePage}>
      <h3>Markov Twain</h3>
      <p>Get yourself a random quote!</p>
      <Quote {...sourceQuote} />
      <RadioButtons radioButtons={radioButtons} onChange={changeSource} />
    </section>
  );
};

export default QuoteFetcherFN;




