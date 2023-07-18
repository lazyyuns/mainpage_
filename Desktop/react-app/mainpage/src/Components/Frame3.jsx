import React from 'react';
import Title from './Title';
import Video from './Video';

const Frame3 = () => {
  const divStyle = {
    width: 624,
    height: 300,
    flexShrink: 0,
    borderRadius: 30,
    background: '#FFF',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.10)',
  };
  const commentStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: 619,
    height: 50,
    flexShrink: 0,
    borderRadius: 30,
    background: '#FFF',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.10)',
    marginTop: 20,
  };

  const bigdivStyle = {
    width: 624,
    height: 370,
    flexShrink: 0,
    borderRadius: 30,
    background: '#FFF',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.10)',
    marginLeft: 34,
  };

  const allStyle = {
    marginTop: '30px',
    marginLeft: '50px',
    display: 'flex',
  };

  const imgStyle = {
    width: 153,
    height: 84,
    flexShrink: 0,
    background: 'url(<path-to-image>), lightgray 50% / cover no-repeat',
  };

  const spanStyle = {
    display: 'flex',
    width: 280,
    flexDirection: 'column',
    flexShrink: 0,
    color: 'var(--light-main-text, #090909)',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '130%',
    letterSpacing: 0.14,
    paddingTop: 11,
    paddingLeft: 20,
  };
  const dateStyle = {
    color: 'var(--light-main-text, #090909)',
    fontSize: 12,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '130%',
    letterSpacing: 0.12,
    paddingLeft: 20,
  };
  const divStyle2 = {
    display: 'flex',
    marginLeft: 41,
    marginTop: 20,
  };
  const divStyle3 = {
    display: 'flex',
    flexDirection: 'column',
  };

  const textStyle = {
    color: 'var(--dark-line, #424242)',
    fontSize: 13,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '150%',
    letterSpacing: 0.13,
  };

  const numStyle = {
    color: '#090909',
    textAlign: 'center',
    fontSize: 36,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
    letterSpacing: 0.36,
  };

  const spanStyle2 = {
    color: 'var(--light-main-text, #090909)',
    fontSize: 13,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '130%',
    letterSpacing: 0.13,
    marginTop: 17,
    marginLeft: 38,
  };
  return (
    <div style={allStyle}>
      <div>
        <div style={divStyle}>
          <Title
            img="최근영상.jpg"
            maintxt="최근 영상"
            text="가장 최근에 올린 영상"
          ></Title>
          <div style={divStyle2}>
            <img src="dance.jpg" style={imgStyle} />
            <div>
              <span style={spanStyle}>
                LISA "MONEY" Dance Cover 춤 실력 향상시키는 거울모드 안무배우기
                (MIRRORED)
              </span>
              <span style={dateStyle}>2022.02.02.</span>
            </div>
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'row', paddingTop: 27 }}
          >
            <div style={{ ...divStyle3, paddingLeft: 41 }}>
              <span style={textStyle}>조회수</span>
              <span style={numStyle}>502</span>
            </div>
            <div style={{ ...divStyle3, paddingLeft: 160.5 }}>
              <span style={textStyle}>예상수익</span>
              <span style={numStyle}>$10</span>
            </div>
            <div style={{ ...divStyle3, paddingLeft: 139 }}>
              <span style={textStyle}>플레이횟수</span>
              <span style={numStyle}>210</span>
            </div>
          </div>
        </div>
        <div style={commentStyle}>
          <Title img="Vector.jpg" maintxt="댓글" padding={10}></Title>
          <span style={spanStyle2}>
            Please make the Butter too!🔥🔥 Please make the Butter too!...
          </span>
        </div>
      </div>
      <div style={bigdivStyle}>
        <Title
          img="모든영상.jpg"
          maintxt="모든 영상"
          text="높은 조회수 순"
        ></Title>
        <Video
          num={1}
          img="dance.jpg"
          title='LISA "MONEY" Dance Cover 춤 실력 향상시키는 거울모드 안무배우기 (MIRRORED)'
          views={1234}
          margin={28}
        />
        <Video
          num={2}
          img="dance.jpg"
          title='LISA "MONEY" Dance Cover 춤 실력 향상시키는 거울모드 안무배우기 (MIRRORED)'
          views={999}
          margin={35}
        />
        <Video
          num={3}
          img="dance.jpg"
          title='LISA "MONEY" Dance Cover 춤 실력 향상시키는 거울모드 안무배우기 (MIRRORED)'
          views={888}
          margin={35}
        />
      </div>
    </div>
  );
};

export default Frame3;
