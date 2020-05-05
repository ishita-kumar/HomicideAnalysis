// import React from 'react';
// import './About.css';

import React, { Component } from 'react';

var Chart = require("chart.js");

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const node = this.node;

    var myChart = new Chart(node, {
      type: "line",
      data: {
        labels: ["<  1","1 - 2","3 - 4","5 - 9","10 - 14","15 - 19","20 - 24","25 - 29","> - 29"],      
          datasets: [{
              label: 'Employee',
              backgroundColor: "#caf270",
              data: [12, 59, 5, 56, 58,12, 59, 87, 45],
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