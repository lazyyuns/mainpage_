import React from 'react';
import Count from './Count';
import Title from './Title';

const Profitsum = () => {
  const divStyle = {
    width: 838,
    height: 198,
    top: 553,
    left: 112,
    borderRadius: 30,
    background: '#FFFFFF',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.1)',
    marginTop: 30,
    marginLeft: 50,
  };

  return (
    <div style={divStyle}>
      <Title
        img="Moneybox.jpg"
        maintxt="누적 수익"
        text="정산받은 모든 수익"
      ></Title>
      <Count money={'$112'} style={{ textAlign: 'left' }} />
    </div>
  );
};

export default Profitsum;