import React from 'react';
import { shallow } from 'enzyme';
import Cat from './cat';

it('renders cats name', () => {
  const props = {
    name: 'Snuggles',
    picture: 'https://picsofsnugglez.com/1'
  }
  const wrapper = shallow(<Cat { ...props } />);
  const name = 'Snuggles';
  
  expect(wrapper.contains(name)).toEqual(true);
});
