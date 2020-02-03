import React from 'react';
import { shallow } from 'enzyme';
import Quote from './Quote';

describe('Quote component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Quote text="A QUOTE" source="My MOM" />);
    expect(wrapper).toMatchSnapshot();
  })
})