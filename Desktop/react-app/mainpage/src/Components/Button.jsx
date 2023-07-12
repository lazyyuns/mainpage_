import React from 'react';

const Button = ({ color, text }) => {
  const divStyle = {
    display: 'inline-flex',
    padding: '7px 18px',
    alignItems: 'flex-start',
    gap: 10,
    borderRadius: 3,
    background: color,
  };
  const spanStyle = {
    color: 'var(--dm-main-text-button, #F5F6F8)',
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    letterSpacing: 0.12,
  };
  return (
    <div style={divStyle}>
      <span style={spanStyle}>{text}</span>
    </div>
  );
};

export default Button;
