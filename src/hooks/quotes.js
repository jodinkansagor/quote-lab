import { useState, useEffect } from 'react';
import { getMarkovWithSource } from '../services/getQuote';



export const useSourceQuotes = (source) => {
  const [currentSource, setCurrentSource] = useState(source);
  const [sourceQuote, setSourceQuote] = useState({});

  useEffect(() => {
    getSourceQuote(currentSource);
  }, [currentSource]);

  const getSourceQuote = (source) => {
    getMarkovWithSource(source)
      .then(newQuote => setSourceQuote(newQuote));
  };

  return { sourceQuote, getSourceQuote };

};
