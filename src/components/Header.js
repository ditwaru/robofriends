import React from 'react';

const Header = React.memo((props) => {
  console.log(props);
  return <h1>{props.title}</h1>;
});

export default Header;
