/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { BarChart, Grid, PieChart, ProgressCircle, StackedBarChart, LineChart, YAxis, XAxis } from 'react-native-svg-charts'
type Props = {}
class LineChartWithY_Axis extends Component<Props> {
  render() {
    const yAxisData = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
    const lineDataWithYaxis = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
    const contentInset = { top: 20, bottom: 20 }
    return (
      <View style={{ flex: 1, marginTop: 20 }}>
        <View style={{ height: 200, flexDirection: 'row' }}>
          <YAxis
            data={lineDataWithYaxis}
            contentInset={contentInset}
            svg={{
              fill: 'grey',
              fontSize: 10
            }}
            numberOfTicks={10}
            formatLabel={value => `${value}ºC`}
          />
          <LineChart style={{ flex: 1 }} data={yAxisData} gridMin={0} contentInset={{ top: 10, bottom: 10 }} svg={{ stroke: 'rgb(134, 65, 244)' }}>
            <Grid />
          </LineChart>
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
export default LineChartWithY_Axis
