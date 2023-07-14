import React from 'react';
import Title from './Title';

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

  return (
    <div style={allStyle}>
      <div>
        <div style={divStyle}>
          <Title
            img="최근영상.jpg"
            maintxt="최근 영상"
            text="가장 최근에 올린 영상"
          ></Title>
        </div>
        <div style={commentStyle}>
          <Title img="Vector.jpg" maintxt="댓글" padding={10}></Title>
        </div>
      </div>
      <div style={bigdivStyle}>
        <Title
          img="모든영상.jpg"
          maintxt="모든 영상"
          text="높은 조회수 순"
        ></Title>
      </div>
    </div>
  );
};

export default Frame3;
