import React, { Component } from 'react';
import { getFuturama } from '../services/getQuote';
import Quote from '../components/Quote';
import Button from '../components/Button';

export default class QuoteFetcher extends Component {
  state = {
    quote: { text: '', name: '' }
  }

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    return getFuturama()
      .then(quote => this.setState({ quote }));
  }

  render() {
    const { quote } = this.state;

    return (
      <>
        <Quote {...quote} />
        <Button onClick={this.fetch} />
      </>
    );
  }

}

