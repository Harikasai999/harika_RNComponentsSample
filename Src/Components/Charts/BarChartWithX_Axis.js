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
class BarChartWithX_Axis extends Component<Props> {
  render() {
    const xAxisData = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
    const fill = 'rgb(134, 65, 244)'
    return (
      <View style={{ flex: 1, marginTop: 20 }}>
        <View style={{ height: 200, padding: 20 }}>
          <BarChart style={{ height: 200 }} data={xAxisData} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
            <Grid />
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
