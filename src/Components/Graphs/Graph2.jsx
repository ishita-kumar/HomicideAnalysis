// import React from 'react';
// import './About.css';

import React, { Component } from 'react';
import years from './Data/YearAscendingOrder.json';
import data from './Data/YearWiseGunViolence.json';
var Chart = require("chart.js");

class Graph2 extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const node = this.node;

    var myChart = new Chart(node, {
      type: "line",
      data: {
        labels: years['Years'],      
          datasets: [{
              label: 'Crime rate for gun violence',
              backgroundColor: "#caf270",
              data: data ,
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

export default Graph2;