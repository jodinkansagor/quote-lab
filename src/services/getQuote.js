export const getMarkov = () => {
  return fetch('https://cors-anywhere.herokuapp.com/https://markovtwain.herokuapp.com/api/v1/results', {
    method: 'GET',
    headers: {
      origin: null,
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(({ tweetText, source }) => ({
      text: tweetText,
      source: source.fullName,
    }));
};

export const getMarkovWithSource = (source) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://markovtwain.herokuapp.com/api/v1/results/${source}`, {
    method: 'GET',
    headers: {
      origin: null,
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(({ tweetText, source }) => ({
      text: tweetText,
      source: source.fullName,
    }));
};

