import React from 'react';
import CardList from './CardList';
import { shallow } from 'enzyme';

it('expect to render card component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'john snow',
      email: 'john@gmail.com',
    },
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
