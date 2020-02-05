import { useState, useEffect } from 'react';
import { getMarkovWithSource } from '../services/getQuote';
import { getMarkov } from '../services/__mocks__/getQuote';
import { getTwoQuotes } from '../services/getTwoQuotes';



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

export const useTwoQuotes = () => {
  const [twoQuotes, setTwoQuotes] = useState([]);

  const getTwo = () => {
    getTwoQuotes()
      .then(twoQuotes => setTwoQuotes(twoQuotes));
  };

  return { twoQuotes, getTwo };
};


