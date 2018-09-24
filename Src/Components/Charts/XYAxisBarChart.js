import React from 'react'
import { Grid, LineChart, XAxis, YAxis, BarChart } from 'react-native-svg-charts'
import { View, Text as RNText } from 'react-native'
import { Text, G, Line } from 'react-native-svg'
class XYAxisBarChart extends React.PureComponent {
  render() {
    const data = [110, 50, 10, 95, -4, -24, 85, -10, 53, -53, 24, 50, -20, -80, -110]

    const axesSvg = { fontSize: 10, fill: 'grey' }
    const verticalContentInset = { top: 10, bottom: 10 }
    const xAxisHeight = 30
    const CUT_OFF = 20

    const Labels = ({ x, y, bandwidth, data }) =>
      data.map((value, index) => {
        console.log('BADWIDTH@@@@', bandwidth, 'valu@@@@', value, 'Index@@@@ ', index)
        return (
          <Text
            key={index}
            x={x(index) + bandwidth / 2}
            y={value < CUT_OFF ? y(value) - 10 : y(value) + 15}
            fontSize={12}
            fill={value >= CUT_OFF ? 'blue' : 'red'}
            alignmentBaseline={'middle'}
            textAnchor={'middle'}
          >
            {value}
          </Text>
        )
      })
    const CustomGrid = ({ x, y, data, ticks }) => (
      <G>
        {// Horizontal grid
        ticks.map(tick => <Line key={tick} x1={'0%'} x2={'100%'} y1={y(tick)} y2={y(tick)} stroke={'rgba(0,0,0,0.2)'} />)}
        {// Vertical grid
        data.map((_, index) => <Line key={index} y1={'0%'} y2={'100%'} x1={x(index)} x2={x(index)} stroke={'rgba(0,0,0,0.2)'} />)}
      </G>
    )
    // Layout of an x-axis together with a y-axis is a problem that stems from flexbox.
    // All react-native-svg-charts components support full flexbox and therefore all
    // layout problems should be approached with the mindset "how would I layout regular Views with flex in this way".
    // In order for us to align the axes correctly we must know the height of the x-axis or the width of the x-axis
    // and then displace the other axis with just as many pixels. Simple but manual.

    return (
      <View style={{ flex: 1, padding: 10 }}>
        <View style={{ height: 300, flexDirection: 'row' }}>
          <YAxis data={data} style={{ marginBottom: 0 }} contentInset={verticalContentInset} svg={axesSvg} />
          <View style={{ flex: 1 }}>
            {/*<LineChart style={{ flex: 1 }} data={data} contentInset={verticalContentInset} svg={{ stroke: 'rgb(134, 65, 244)' }}>
            <Grid />
          </LineChart>*/}
            <BarChart
              style={{ flex: 1 }}
              data={data}
              contentInset={{ top: 20, bottom: 20 }}
              svg={{
                fill: 'lightgreen'
              }}
            >
              <Grid />
              <Labels />
              <CustomGrid belowChart={true} />
            </BarChart>
          </View>
        </View>
        <XAxis style={{ marginHorizontal: -10, height: 30 }} data={data} formatLabel={(value, index) => index} svg={axesSvg} contentInset={{ left: 30, right: 30 }} />
      </View>
    )
  }
}

export default XYAxisBarChart
