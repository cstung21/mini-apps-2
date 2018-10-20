import React from 'react';
const Chart = require('chart.js');

class LineChart extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.initializeChart();
  }

  componentDidUpdate(prevProps) {
    const { data } = this.props;
    if (data !== prevProps.data) {
      this.initializeChart();
  }
}

  initializeChart() {
    const { data } = this.props;
    const xLabels = Object.keys(data);
    const yLabels = Object.values(data);

    const ctx = document.getElementById("myChart");
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: xLabels,
        datasets: [{
          label: 'BTC Closing Prices',
          data: yLabels,
          backgroundColor: 'rgba(0,255,0,0.3)',
          borderColor: 'rgba(0,255,0,0.3)',
          borderWidth: 1
          }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:false
            }
          }]
        }
      }
    });
  }

  render() {
    return (
      <div style={{width: '600px', height: '400px'}}>
        <canvas id="myChart"></canvas>
      </div>
    );
  } 
};

export default LineChart;