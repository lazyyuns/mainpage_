import React from 'react';
import Earn from './Earn';
import Views from './Views';
import Profitsum from './Profitsum';

const divStyle1 = {
  width: '838',
  height: '539',
  display: 'flex',
  flexdirection: 'column',
  justifyContent: 'space-between',
};

const divStyle2 = {
  display: 'flex',
};
const Frame2_1 = () => {
  return (
    <div style={{ marginLeft: '50px' }}>
      <div style={divStyle1}>
        <Earn />
        <Views />
      </div>
      <div style={divStyle2}>
        <Profitsum />
      </div>
    </div>
  );
};

export default Frame2_1;
