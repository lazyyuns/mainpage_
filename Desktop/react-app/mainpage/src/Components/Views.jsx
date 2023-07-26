import React from 'react';
import Title from './Title';
import Count from './Count';
import Box from './Box';

const Views = () => {
  return (
    <div style={{ display: 'inline-block' }}>
      <Box>
        <Title
          img="visibility.jpg"
          maintxt="누적 조회수"
          text="모든 영상의 조회수"
        ></Title>
        <Count money={'125K'} />
        <Title
          img="person.jpg"
          maintxt="구독자 수"
          text="내 채널을 구독한 유저 수"
        ></Title>
        <Count money={12} />
      </Box>
    </div>
  );
};

export default Views;
