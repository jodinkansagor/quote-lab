import { useState, useEffect } from 'react';
import { getFuturama } from '../services/getQuote';

export const useQuotes = () => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    getNewQuote();
  }, []);

  const getNewQuote = () => {
    getFuturama()
      .then(newQuote => setQuote(newQuote));
  };

  return { quote, getNewQuote };
};


