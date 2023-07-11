import React from 'react';

const Box2 = ({ colors, children }) => {
  const divStyle = {
    width: 399,
    height: 200,
    flexShrink: 0,
    borderRadius: 30,
    border: '1px dashed #0D8DAA',
    background: colors,
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.10)',
    marginLeft: 40,
    marginBottom: 25,
  };

  return <div style={divStyle}>{children}</div>;
};

export default Box2;
