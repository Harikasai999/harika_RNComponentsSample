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
class PieChartPage extends Component<Props> {
  render() {
    const pieChartData = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

    const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)

    const pieData = pieChartData.filter(value => value > 0).map((value, index) => ({
      value,
      svg: {
        fill: randomColor(),
        onPress: () => console.log('press', index)
      },
      key: `pie-${index}`
    }))
    return (
      <View style={{ flex: 1, marginTop: 20 }}>
        <PieChart style={{ height: 200 }} data={pieData} />
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
export default PieChartPage
