import * as React from "react";
import { render } from "react-dom";
import { Chart } from "react-google-charts";
import map from './Data/VictimByRace.json';
import data from '../../Data'
import states from './Data/US-States'

export default class Mapgraph extends React.Component {
    constructor(props) {
        super(props);
        this.chartData = [['State', 'Victim Count', {role: 'tooltip', p:{html:true}}]]
    }

    componentDidMount() {
        data.forEach(element => {
            var temp = []
            temp.push(`US-${states[element._id]}`)
            temp.push(element.CountPerState)
            var str1 = `<b>Victim Count:</b> ${element.CountPerState}<br /><b>Slaughter by Negligence:</b> ${element.CrimeTypes[0].CountForEachType} <br/><b>Murder or Manslaughter:</b> ${element.CrimeTypes[1].CountForEachType}`
            temp.push(str1)
            this.chartData.push(temp)
        })

        console.log(this.chartData)
    }

    render() {
        return (
            <div className={"my-pretty-chart-container"}>
                <Chart
                    width={'850px'}
                    height={'500px'}
                    chartType="GeoChart"
                    data={this.chartData}
                    options={{

                        region: "US",
                        resolution: "provinces",
                        colorAxis: { colors: [ '#F9EBEA', '#E6B0AA', '#EC7063', '#CD5C5C', '#C0392B'] },
                        backgroundColor: '#A9CCE3',
                        defaultColor: 'black',
                        tooltip: {isHtml: true},
                    }}
                    // Note: you will need to get a mapsApiKey for your project.
                    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                    mapsApiKey="AIzaSyD6Df9ooO9bc8H6JizfeKRdgjq8zHJe2AU"
                    rootProps={{ 'data-testid': '4' }}
                />

            </div>
        );
    }
}
