import React from 'react';
import Box2 from './Box2';

import Button from './Button';

const VideoUploade = () => {
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

  const textStyle = {
    color: '#292929',
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Poppins',
    fontstyle: 'normal',
    fontWeight: 500,
    letterSpacing: 0.12,
  };

  const buttonDivStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  };

  const buttonStyle = {
    display: 'inline-block',
    backgroundColor: '#32A2BB',
    padding: '7px 18px',
    color: 'var(--dm-main-text-button, #F5F6F8)',
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  };

  return (
    <div>
      <Box2 colors="#E7F5F8">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={'Youtube.jpg'} style={imgStyle} />
          <span style={spanStyle}>유튜브 URL로 빠른 업로드</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={textStyle}>
            유튜브에 업로드한 영상의 주소만 있으면 빠르게 올릴 수 있어요
          </span>
          <div style={buttonDivStyle}>
            <Button color="#32A2BB" text="업로드" width="70px"></Button>
          </div>
        </div>
      </Box2>
    </div>
  );
};
export default VideoUploade;
