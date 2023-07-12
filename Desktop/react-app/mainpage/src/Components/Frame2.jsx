import React from 'react';
import Frame2_1 from './Frame2_1';
import Frame2_2 from './Frame2_2';
const divStyle = {
  marginTop: 30,
  display: 'flex',
};
const Frame2 = () => {
  return (
    <div style={divStyle}>
      <Frame2_1 />
      <Frame2_2 />
    </div>
  );
};

export default Frame2;
