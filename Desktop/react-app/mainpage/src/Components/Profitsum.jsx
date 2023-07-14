import React from 'react';
import Count from './Count';
import Title from './Title';
import ApexCharts from 'react-apexcharts';

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
    display: 'flex',
  };

  return (
    <div style={divStyle}>
      <div>
        <Title
          img="Moneybox.jpg"
          maintxt="누적 수익"
          text="정산받은 모든 수익"
          padding={29}
        ></Title>
        <Count
          money={'$112'}
          margin={30}
          style={{ textAlign: 'left', paddingLeft: '41px' }}
        />
      </div>
      <ApexCharts
        series={[
          {
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100],
          },
        ]}
        options={{
          chart: { height: 115, width: 548, type: 'area' },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: 'smooth',
          },
          xaxis: {
            type: 'datetime',
            categories: [
              '2018-09-19T00:00:00.000Z',
              '2018-09-19T01:30:00.000Z',
              '2018-09-19T02:30:00.000Z',
              '2018-09-19T03:30:00.000Z',
              '2018-09-19T04:30:00.000Z',
              '2018-09-19T05:30:00.000Z',
              '2018-09-19T06:30:00.000Z',
            ],
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm',
            },
          },
        }}
      >
        {' '}
      </ApexCharts>
    </div>
  );
};

export default Profitsum;
