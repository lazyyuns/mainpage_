import React from 'react';
import Earn from './Earn';
import Views from './Views';
import Profitsum from './Profitsum';

const divStyle = {
  display: 'inline-block',
  width: '838',
  height: '539',
};
const Frame2_1 = () => {
  return (
    <div style={divStyle}>
      <div>
        <Earn />
        <Views />
      </div>
      <Profitsum />
    </div>
  );
};

export default Frame2_1;
