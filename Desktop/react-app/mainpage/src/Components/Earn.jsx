import React from 'react';
import { MdInsights } from 'react-icons/md';
import Title from './Title';
import Count from './Count';
import styled from 'styled-components';
import Application from './Application';
import Box from './Box';

const Earn = () => {
  return (
    <div style={{ display: 'inline-block' }}>
      <Box>
        <Title
          img="Group.jpg"
          maintxt="예상 수익"
          text="모든 영상에서 발생한 수익"
        ></Title>
        <Count money={'$2'} />
        <Title
          img="Money.jpg"
          maintxt="수익 정산 신청"
          text="수익 신청은 $10이상부터 가능해요"
        ></Title>
        <Application />
      </Box>
    </div>
  );
};

export default Earn;
