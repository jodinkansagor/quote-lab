export const getFuturama = () => {
  return fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    .then(res => res.json())
    .then(([{ character, quote }]) => ({
      text: quote,
      source: character,
    }));
};

