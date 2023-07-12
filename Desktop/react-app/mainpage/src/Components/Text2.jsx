import React from 'react';

const Text2 = ({ text }) => {
  const spanStyle = {
    color: '#292929',
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Poppins',
    fontstyle: 'normal',
    fontWeight: 500,
    lineHeight: 18,
    letterSpacing: 0.12,
  };
  return <span style={spanStyle}>{text}</span>;
};

export default Text2;
