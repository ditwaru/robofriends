import React from 'react';

const Header = React.memo((props) => {
  return <h1>{props.title}</h1>;
});

export default Header;
