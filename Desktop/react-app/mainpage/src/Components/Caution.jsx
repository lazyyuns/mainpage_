import React from 'react';

const Caution = ({ text, img, style }) => {
  const divStyle = {
    width: 399,
    height: 40,
    flexShrink: 0,
    borderRadius: 30,
    background: '#FCFCFC',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.10)',
    marginLeft: 40,
    ...style,
  };
  const spanStyle = {
    color: 'var(--lm-sub-text-icon, #334D6E)',
    fontSize: 15,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
    letterSpacing: 0.15,
    display: 'inline-block',
    marginLeft: 5,
  };
  const imgStyle = {
    width: 15,
    height: 15,
    flexShrink: 0,
    display: 'inline-block',
    marginTop: 11,
    marginBottom: 11,
    marginLeft: 138,
  };
  return (
    <div style={divStyle}>
      <img src={img} style={imgStyle} />
      <span style={spanStyle}>{text}</span>
    </div>
  );
};

export default Caution;
