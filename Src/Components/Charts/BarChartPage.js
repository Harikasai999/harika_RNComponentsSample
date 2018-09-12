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
class BarChartPage extends Component<Props> {
  render() {
    const fill = 'rgb(134, 65, 244)'
    const barChartData = [50, 10, 40, 95, -4, -24, 22, 85, 66, 125, 35, 53, -53, 24, 50, -20, -80]
    return (
      <View style={{ flex: 1, marginTop: 20 }}>
        <BarChart style={{ height: 200 }} data={barChartData} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
          <Grid />
        </BarChart>
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
export default BarChartPage
