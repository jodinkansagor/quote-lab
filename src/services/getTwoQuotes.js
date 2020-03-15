import { getMarkov } from '../services/getQuote';

export const getTwoQuotes = () => {
  const quote1 = getMarkov();
  const quote2 = getMarkov();
  return Promise.all([quote1, quote2]);
};
