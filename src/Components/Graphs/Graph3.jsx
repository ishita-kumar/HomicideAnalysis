
import React, { Component } from 'react';
import pieData from './Data/CrimeSolvedUnsolved.json';

var Chart = require("chart.js");

class Graph3 extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const node = this.node;
    var labelData = [];
    var percentageData = [];
    for(var key in pieData){
      labelData.push(key);
      percentageData.push(pieData[key]);
      
    }
    console.log(labelData);
    console.log(percentageData);
  var myChart = new Chart(node, {
      type: "pie",
      data: {
        labels: labelData , 
        datasets: [{
        backgroundColor: [
          "#2ecc71",
          "#34495e"
        ],
        data: percentageData
      }]
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

export default Graph3;