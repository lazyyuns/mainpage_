import React from 'react';
import Box2 from './Box2';
import Title2 from './Title2';
import Text2 from './Text2';
import Button from './Button';

const VideoUploade = () => {
  return (
    <div>
      <Box2 colors="#E7F5F8">
        <Title2 img="Youtube.jpg" text="유튜브 URL로 빠른 업로드" />
        <Text2 text="유튜브에 업로드한 영상의 주소만 있으면 빠르게 올릴 수 있어요" />
        <Button color="#32A2BB" text="업로드" />
      </Box2>
    </div>
  );
};

export default VideoUploade;
