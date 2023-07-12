import React from 'react';
import VideoUploade from './VideoUpload';
import FileUpload from './FileUpload';
import Caution from './Caution';
const Frame2_2 = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '399px',
        height: '539px',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      <VideoUploade />
      <FileUpload style={{ marginTop: '25px' }} />
      <Caution
        style={{ marginTop: '22px' }}
        img="error.jpg"
        text="촬영시 주의사항"
      />
      <Caution
        style={{ marginTop: '12px' }}
        img="help.jpg"
        text="업로드 가이드"
      />
    </div>
  );
};

export default Frame2_2;
