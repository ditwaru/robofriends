import React from 'react';

interface Props {
  children?: JSX.Element;
}
const Scroll: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <div
      style={{ overflowY: 'auto', border: '1px solid black', height: '70vh' }}
    >
      {children}
    </div>
  );
};

export default Scroll;
