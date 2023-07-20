import React from 'react';

const Title2 = ({ img, text }) => {
  const imgStyle = {
    width: 23,
    height: 23,
    flexShrink: 0,
  };
  const spanStyle = {
    color: 'var(--lm-main-text, #090909)',
    fontSize: 18,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
    letterSpacing: 0.18,
    marginLeft: 7,
  };
  return (
    <div style={{ display: 'inline-flex', marginTop: '37px' }}>
      <img src={img} style={imgStyle} />
      <span style={spanStyle}>{text}</span>
    </div>
  );
};

export default Title2;
