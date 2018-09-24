/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text as RNText, View, TouchableOpacity } from 'react-native'
import { LinearGradient, Stop, Defs, Text } from 'react-native-svg'
import { BarChart, Grid, PieChart, ProgressCircle, StackedBarChart, LineChart, YAxis, XAxis } from 'react-native-svg-charts'
type Props = {}
class BarChartWithX_Axis extends Component<Props> {
  render() {
    const xAxisData = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
    const fill = 'rgb(134, 65, 244)'
    const CUT_OFF = 20
    const Labels = ({ x, y, bandwidth, data }) =>
      data.map((value, index) => {
        console.log('BADWIDTH@@@@', bandwidth, 'valu@@@@', value, 'Index@@@@ ', index)
        return (
          <Text
            key={index}
            x={x(index) + bandwidth / 2}
            y={value < CUT_OFF ? y(value) - 10 : y(value) + 15}
            fontSize={14}
            fill={value >= CUT_OFF ? 'white' : 'black'}
            alignmentBaseline={'middle'}
            textAnchor={'middle'}
          >
            {value}
          </Text>
        )
      })
    const Gradient = () => (
      <Defs key={'gradient'}>
        <LinearGradient id={'gradient'} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
          <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'} />
          <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'} />
        </LinearGradient>
      </Defs>
    )
    return (
      <View style={{ flex: 1, marginTop: 20 }}>
        <View style={{ height: 200, padding: 20 }}>
          <BarChart
            style={{ height: 200 }}
            data={xAxisData}
            svg={{
              strokeWidth: 2,
              fill: 'url(#gradient)'
            }}
            contentInset={{ top: 30, bottom: 30 }}
          >
            <Labels />
            <Grid />
            <Gradient />
          </BarChart>
          <XAxis style={{ marginHorizontal: -10 }} data={xAxisData} formatLabel={(value, index) => index} contentInset={{ left: 10, right: 10 }} svg={{ fontSize: 10, fill: 'black' }} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: 'white'
  }
})
export default BarChartWithX_Axis
