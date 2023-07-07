import React from 'react';

const Count = (props) => {
  const moneyStyle = {
    color: '#090909',
    textAlign: 'center',
    fontSize: 36,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
    letterSpacing: 0.36,
    paddingTop: 15,
  };
  return (
    <div>
      <span style={moneyStyle}>${props.money}</span>
    </div>
  );
};

export default Count;
