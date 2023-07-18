import React from 'react';

const Video = ({ num, img, title, views, margin }) => {
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 39,
    marginTop: margin,
  };

  const spanStyle = {
    display: 'flex',
    width: 12.751,
    height: 27.002,
    flexDirection: 'column',
    flexShrink: 0,
    marginRight: 15.25,
    color: '#000',
    fontSize: 16,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '130%',
    letterSpacing: 0.16,
  };
  const imgStyle = {
    width: 99,
    height: 54,
    flexShrink: 0,
    background: 'url(<path-to-image>), lightgray 50% / cover no-repeat',
  };
  const titleStyle = {
    display: 'flex',
    width: 294,
    flexDirection: 'column',
    flexShrink: 0,
    color: 'var(--light-main-text, #090909)',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '130%',
    letterSpacing: 0.14,
    marginLeft: 13,
    marginRight: 48,
  };
  const viewsStyle = {
    display: 'flex',
    width: 49.504,
    height: 27.002,
    flexDirection: 'column',
    flexShrink: 0,
    color: '#000',
    fontSize: 21.002,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '130%',
    letterSpacing: 0.21,
  };
  return (
    <div style={divStyle}>
      <span style={spanStyle}>{num}</span>
      <img src={img} style={imgStyle} />
      <div style={titleStyle}>{title}</div>
      <div style={viewsStyle}>{views}</div>
    </div>
  );
};

export default Video;
