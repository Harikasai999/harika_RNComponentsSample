import React from 'react'
import { Grid, LineChart, XAxis, YAxis, BarChart } from 'react-native-svg-charts'
import { View } from 'react-native'
import { Text, G, Line } from 'react-native-svg'
class XYAxisLineChart extends React.PureComponent {
  render() {
    const data = [50, 10, 40, 95, -4, -24, 85, 35, 53, -53, 24, 50, -20, -80]

    const axesSvg = { fontSize: 10, fill: 'grey' }
    const verticalContentInset = { top: 10, bottom: 10 }
    const xAxisHeight = 30

    // Layout of an x-axis together with a y-axis is a problem that stems from flexbox.
    // All react-native-svg-charts components support full flexbox and therefore all
    // layout problems should be approached with the mindset "how would I layout regular Views with flex in this way".
    // In order for us to align the axes correctly we must know the height of the x-axis or the width of the x-axis
    // and then displace the other axis with just as many pixels. Simple but manual.
    const CustomGrid = ({ x, y, data, ticks }) => (
      <G>
        {// Horizontal grid
        ticks.map(tick => <Line key={tick} x1={'0%'} x2={'100%'} y1={y(tick)} y2={y(tick)} stroke={'rgba(0,0,0,0.2)'} />)}
        {// Vertical grid
        data.map((_, index) => <Line key={index} y1={'0%'} y2={'100%'} x1={x(index)} x2={x(index)} stroke={'rgba(0,0,0,0.2)'} />)}
      </G>
    )
    return (
      <View style={{ height: 300, padding: 10, flexDirection: 'row' }}>
        <YAxis data={data} style={{ marginBottom: xAxisHeight }} contentInset={verticalContentInset} svg={axesSvg} />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <LineChart style={{ flex: 1 }} data={data} contentInset={verticalContentInset} svg={{ stroke: 'rgb(134, 65, 244)' }}>
            <Grid />
            <CustomGrid belowChart={true} />
          </LineChart>

          <XAxis style={{ marginHorizontal: -10, height: xAxisHeight }} data={data} formatLabel={(value, index) => index} contentInset={{ left: 10, right: 10 }} svg={axesSvg} />
        </View>
      </View>
    )
  }
}

export default XYAxisLineChart
