import React from 'react';
import Box2 from './Box2';
import Title2 from './Title2';
import Text2 from './Text2';
import Button from './Button';
const FileUpload = ({ style }) => {
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
      <Box2 colors="#F3EFF9">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={'upload.jpg'} style={imgStyle} />
          <span style={spanStyle}>파일 직접 업로드</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={textStyle}>
            파일을 직접 선택하거나 여기에 드래그 앤 드롭해주세요
          </span>
          <div style={buttonDivStyle}>
            <Button color="#5100CE" text="파일 선택" width="84px"></Button>
          </div>
        </div>
      </Box2>
    </div>
  );
};

export default FileUpload;
