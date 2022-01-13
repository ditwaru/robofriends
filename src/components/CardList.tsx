import React from 'react';
import Card from './Card.tsx';
import { RobotProps } from '../types/RobotTypes';

interface Props {
  robots: Array<RobotProps>;
}
const CardList = ({ robots }: Props) => {
  return (
    <div>
      {robots.map(({ id, name, email }) => (
        <Card key={id} id={id} name={name} email={email} />
      ))}
    </div>
  );
};

export default CardList;
