import React from 'react';

const Button = ({ color, text ,width, onChange }) => {

  const divStyle = {
    display: 'inline-flex',
    padding: "7px 18px",
    alignItems: "flex-start",
    gap: 10,
    borderRadius: 3,
    background: color,
    width : width,
    height: 29,

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
  const onClick = () => {
    console.log('Not an accessible button');
  };
  return (
    <label style={divStyle}>
      <input type="file" style={{ display: "none" }} onChange={onChange} />
      <span style={spanStyle}>{text}</span>
    </label>
  );
};

export default Button;
