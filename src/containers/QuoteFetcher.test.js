import React from 'react';
import { shallow } from 'enzyme';
import QuoteFetcher from './QuoteFetcher';
import { getFuturama } from '../services/getQuote';

jest.mock('../services/getQuote.js');

describe('QuoteFetcher container', () => {

  it('can get a quote from the api', () => {
    const wrapper = shallow(<QuoteFetcher />);
    const quoteFetcher = wrapper.instance();



    return quoteFetcher.fetch()

      .then(() => {
        expect(getFuturama).toHaveBeenCalled();
        expect(wrapper.state('quote')).toEqual(
          { text: 'My Quote', source: 'My Mom' }
        );
      });
  });
});


