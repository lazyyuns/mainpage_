import React from 'react';
import Title from './Title';
import Count from './Count';
import styled from 'styled-components';
import Box from './Box';

const ParentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

const Views = () => {
  return (
    <div>
      <Box>
        <Title
          img="visibility.jpg"
          maintxt="누적 조회수"
          text="모든 영상의 조회수"
        ></Title>
        <ParentContainer>
          <Count money={2} />
        </ParentContainer>
        <Title
          img="person.jpg"
          maintxt="구독자 수"
          text="내 채널을 구독한 유저 수"
        ></Title>
      </Box>
    </div>
  );
};

export default Views;
