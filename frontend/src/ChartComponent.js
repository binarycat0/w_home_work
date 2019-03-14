import React, { Component } from 'react';
import Highcharts from 'highcharts';
import {
  HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, LineSeries
} from 'react-jsx-highcharts';

class ChartComponent extends React.Component {

  render() {
    return (
      <HighchartsChart>
        <Chart />
        <Title>w_home_work</Title>
        <XAxis>
          <XAxis.Title></XAxis.Title>
        </XAxis>
        <YAxis>
          <YAxis.Title>fibonacci</YAxis.Title>
          <LineSeries data={this.props.data} />
        </YAxis>
      </HighchartsChart>
    )
  }
}

export default withHighcharts(ChartComponent, Highcharts);