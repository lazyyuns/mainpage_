import React from 'react';

const Count = ({ money, style }) => {
  const moneyStyle = {
    color: '#090909',
    fontSize: 36,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
    letterSpacing: 0.36,
    paddingTop: 15,
    textAlign: style ? style.textAlign : 'center',
    display: style ? style.display : 'flex',
    justifyContent: style ? style.justifyContent : 'center',
  };
  const divStyle = {
    ...style,
  };
  return (
    <div style={divStyle}>
      <span style={moneyStyle}>{money}</span>
    </div>
  );
};

export default Count;
