import React from 'react';

const divStyle = {
  width: 399,
  height: 311,
  flexShrink: 0,
  borderRadius: 30,
  background: '#FFF',
  boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.10)',
};

const Box = ({ children }) => {
  return <div style={divStyle}>{children}</div>;
};

export default Box;
