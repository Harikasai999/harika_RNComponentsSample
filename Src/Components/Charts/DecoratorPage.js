import React from 'react'
import { AreaChart, Grid, XAxis, YAxis } from 'react-native-svg-charts'
import { Circle, Path, G, Line } from 'react-native-svg'
import { View } from 'react-native'
class DecoratorPage extends React.PureComponent {
  render() {
    const data = [50, 10, 40, 95, -4, -24, 85, 35, -53, 53, -22, 50, -20, -80]
    const axesSvg = { fontSize: 10, fill: 'grey' }
    const verticalContentInset = { top: 10, bottom: 10 }
    const xAxisHeight = 30
    const Decorator = ({ x, y, data }) => {
      return data.map((value, index) => <Circle key={index} cx={x(index)} cy={y(value)} r={4} stroke={'rgb(134, 65, 244)'} fill={'white'} />)
    }

    const LineGraph = ({ line }) => <Path d={line} stroke={'rgba(134, 65, 244)'} fill={'none'} />
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
        <YAxis data={data} style={{ marginBottom: xAxisHeight }} contentInset={{ top: 10, bottom: 10, right: 10 }} svg={axesSvg} />
        <View style={{ flex: 1 }}>
          <AreaChart style={{ flex: 1 }} data={data} svg={{ fill: 'rgba(134, 65, 244, 0.2)' }} contentInset={{ bottom: 10, top: 10 }}>
            <Grid />
            <LineGraph />
            <Decorator />
            <CustomGrid belowChart={true} />
          </AreaChart>

          <XAxis style={{ height: xAxisHeight }} data={data} formatLabel={(value, index) => index} contentInset={{ left: 10, right: 10 }} svg={axesSvg} />
        </View>
      </View>
    )
  }
}

export default DecoratorPage
