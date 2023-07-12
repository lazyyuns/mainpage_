import React from 'react';
import Box2 from './Box2';
import Title2 from './Title2';
import Text2 from './Text2';
import Button from './Button';
const FileUpload = ({ style }) => {
  return (
    <div>
      <Box2 colors="#F3EFF9" style={style}>
        <Title2 img="upload.jpg" text="파일 직접 업로드" />
        <Text2 text="파일을 직접 선택하거나 여기에 드래그 앤 드롭해주세요" />
        <Button color="#5100CE" text="파일 선택" />
      </Box2>
    </div>
  );
};

export default FileUpload;
