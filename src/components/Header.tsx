import React from 'react';

interface Props {
  title: string;
}

const Header: React.FunctionComponent<Props> = React.memo(({ title }) => {
  return <h1>{title}</h1>;
});

export default Header;
