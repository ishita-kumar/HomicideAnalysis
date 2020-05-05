import * as React from "react";
import { render } from "react-dom";
import { Chart } from "react-google-charts";

export default class Mapgraph extends React.Component {
    render() {
        return (
            <div className={"my-pretty-chart-container"}>
                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="GeoChart"
                    data={[
                        ['State', 'Victim Count'],
                        ['US-IL', 200],
                        ['US-IN', 300],
                        ['US-IA', 20],
                        ['US-RI', 150]

                    ]}
                    options={{

                        region: "US",
                       resolution: "provinces",
                        // colorAxis: { colo rs: ['#00853f', 'black', '#e31b23'] },
                        backgroundColor: '#81d4fa',
                        // datalessRegionColor: '#f8bbd0',
                        defaultColor: '#f5f5f5',
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
