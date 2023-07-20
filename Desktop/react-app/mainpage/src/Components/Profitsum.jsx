import Count from './Count';
import Title from './Title';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

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

  const initialChartData = {
    series: [
      {
        name: 'profit',
        data: [0, 0, 0, 0, 3, 5, 9, 10, 11],
      },
    ],
    options: {
      chart: {
        height: 115,
        type: 'area',
        flexShrink: 0,
        display: 'flex',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      grid: {
        row: {
          colors: ['transparent'],
          opacity: 1,
        },
      },
      colors: ['#5100CE'],
      xaxis: {
        labels: {
          show: false,
        },
      },
      yaxis: {
        opposite: true,
        forceNiceScale: true,
        labels: {
          show: false, 
        },
      },
    },
  };

  const [chartData] = useState(initialChartData);

  return (
    <div style={divStyle}>
      <div style={{ flex: 1 }}>
        <Title
          img="Moneybox.jpg"
          maintxt="누적 수익"
          text="정산받은 모든 수익"
          padding={29}
        />
        <Count
          money={'$112'}
          margin={30}
          style={{ textAlign: 'left', paddingLeft: '41px', marginTop: '14px' }}
        />
      </div>
      <div style={{ flex: 3 }}>
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={170}
          width = {550}
        />
      </div>
    </div>
  );
};

export default Profitsum;
