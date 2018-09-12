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
class ProgressCirclePage extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1, marginTop: 20 }}>
        <ProgressCircle style={{ height: 200 }} progress={0.5} progressColor={'rgb(134, 65, 244)'} />
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
export default ProgressCirclePage
