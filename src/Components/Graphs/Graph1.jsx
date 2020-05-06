// import React from 'react';
// import './About.css';

import React, { Component } from 'react';
import years from './Data/YearAscendingOrder.json';
import map from './Data/VictimByRace.json';
var Chart = require("chart.js");

class Graph1 extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const node = this.node;
    var dataset = [];
    var colors = ["#E39F0C", "#caf270", "#45c490", "#2e5468", "#008d93" ]
    var c=0;
    for(var key in map){
      dataset.push({
          label: key,
          backgroundColor: colors[c++],
          data: map[key]
      });
      
  }
 
  var myChart = new Chart(node, {
      type: "bar",
      data: {
        labels: years['Years'], 
        datasets: dataset
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
          style={{ width: 1200, height: 500 }}
          ref={node => (this.node = node)}
        />
      </div>
    );
  }
}

export default Graph1;