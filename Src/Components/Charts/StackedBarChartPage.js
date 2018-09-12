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
class StackedBarChartPage extends Component<Props> {
  render() {
    const stackedChartData = [
      {
        month: new Date(2015, 0, 1),
        apples: 3840,
        bananas: 1920,
        cherries: 960,
        dates: 400,
        oranges: 400
      },
      {
        month: new Date(2015, 1, 1),
        apples: 1600,
        bananas: 1440,
        cherries: 960,
        dates: 400
      },
      {
        month: new Date(2015, 2, 1),
        apples: 640,
        bananas: 960,
        cherries: 3640,
        dates: 400
      },
      {
        month: new Date(2015, 3, 1),
        apples: 3320,
        bananas: 480,
        cherries: 640,
        dates: 400
      }
    ]
    const stackedColors = ['#7b4173', '#a55194', '#ce6dbd', '#de9ed6']
    const stackedKeys = ['apples', 'bananas', 'cherries', 'dates']
    return (
      <View style={{ flex: 1, marginTop: 20 }}>
        <StackedBarChart style={{ height: 200 }} keys={stackedKeys} colors={stackedColors} data={stackedChartData} showGrid={false} contentInset={{ top: 30, bottom: 30 }} />
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
export default StackedBarChartPage
