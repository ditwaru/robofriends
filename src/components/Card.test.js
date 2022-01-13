import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

it('expect to render card component', () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
