import React from 'react';

const spanStyle = {
  color: 'var(--dm-main-text-button, #F5F6F8)',
  textAlign: 'center',
  fontSize: 14,
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
  letterSpacing: 0.14,
  marginTop: 12,
  display: 'inline-block',
};
const divStyle = {
  width: 160,
  height: 45,
  flexShrink: 0,
  borderRadius: 22.5,
  background: 'var(--dm-hover, #C4C5C6)',
  display: 'flex',
  justifyContent: 'center',
  marginTop: 20,
  marginLeft: 126,
};

const Application = () => {
  return (
    <div style={divStyle}>
      <span style={spanStyle}>신청하기</span>
    </div>
  );
};

export default Application;
