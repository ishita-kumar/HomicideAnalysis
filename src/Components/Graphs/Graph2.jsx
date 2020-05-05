// import React from 'react';
// import './About.css';

import React, { Component } from 'react';

var Chart = require("chart.js");

class Layout2 extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const node = this.node;

    var myChart = new Chart(node, {
      type: "bar",
      data: {
        labels: ["<  1","1 - 2","3 - 4","5 - 9","10 - 14","15 - 19","20 - 24","25 - 29","> - 29"],      
          datasets: [{
              label: 'Employee',
              backgroundColor: "#caf270",
              data: [12, 59, 5, 56, 58,12, 59, 87, 45],
          }, {
              label: 'Engineer',
              backgroundColor: "#45c490",
              data: [12, 59, 5, 56, 58,12, 59, 85, 23],
          }, {
              label: 'Government',
              backgroundColor: "#008d93",
              data: [12, 59, 5, 56, 58,12, 59, 65, 51],
          }, {
              label: 'Political parties',
              backgroundColor: "#2e5468",
              data: [12, 59, 5, 56, 58, 12, 59, 12, 74],
          }],
      },
      options: {
        tooltips: {
          displayColors: true,
          callbacks:{
            mode: 'x',
          },
        },
        scales: {
          xAxes: [{
            stacked: true,
            gridLines: {
              display: false,
            }
          }],
          yAxes: [{
            stacked: true,
            ticks: {
              beginAtZero: true,
            },
            type: 'linear',
          }]
        },
            responsive: true,
            maintainAspectRatio: false,
            legend: { position: 'bottom' },
        }
  });
  }
  render() {
    return (
      <div>
        <canvas
          style={{ width: 800, height: 300 }}
          ref={node => (this.node = node)}
        />
      </div>
    );
  }
}

export default Layout;