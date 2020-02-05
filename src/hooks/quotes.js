import { useState, useEffect } from 'react';
import { getFuturama, getFuturamaWithSource } from '../services/getQuote';

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

export const useSourceQuotes = (source) => {
  const [currentSource, setCurrentSource] = useState(source);
  const [sourceQuote, setSourceQuote] = useState({});

  useEffect(() => {
    getSourceQuote(currentSource);
  }, [currentSource]);

  const getSourceQuote = (source) => {
    getFuturamaWithSource(source)
      .then(newQuote => setSourceQuote(newQuote));
  };

  return { sourceQuote, getSourceQuote, setCurrentSource };

}



