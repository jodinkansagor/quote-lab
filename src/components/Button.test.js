import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Button onClick={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
