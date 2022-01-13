import React from 'react';
import { RobotProps } from '../types/RobotTypes';

const Card: React.FunctionComponent<RobotProps> = ({ name, id, email }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
      <img
        src={`https://robohash.org/${id}?size=200x200`}
        height="200"
        width="200"
        alt="robots"
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
