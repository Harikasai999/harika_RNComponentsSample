/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import CustomNavbar from './../../Components/CustomNavbar'
import colors from './../../Themes/Colors'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import { BarChart, Grid, PieChart, ProgressCircle, StackedBarChart, LineChart, YAxis, XAxis } from 'react-native-svg-charts'
import PieChartPage from './../../Components/Charts/PieChartPage'
import BarChartPage from './../../Components/Charts/BarChartPage'
import BarChartWithX_Axis from './../../Components/Charts/BarChartWithX_Axis'
import LineChartsPage from './../../Components/Charts/LineChartsPage'
import LineChartWithX_Axis from './../../Components/Charts/LineChartWithX_Axis'
import LineChartWithY_Axis from './../../Components/Charts/LineChartWithY_Axis'
import ProgressCirclePage from './../../Components/Charts/ProgressCirclePage'
import StackedBarChartPage from './../../Components/Charts/StackedBarChartPage'
type Props = {}
class ChartPage extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={[colors.lg_color1, colors.lg_color2, colors.lg_color3]} start={{ x: 0.0, y: 0.5 }} end={{ x: 1.0, y: 0.5 }} locations={[0.0, 1.0]} style={styles.container}>
          <View style={{ height: 44 }}>
            <CustomNavbar title="Charts" />
          </View>

          <View style={styles.container}>
            {/*<PieChart chart_wh={chart_wh} series={series} sliceColor={sliceColor} />
              <Text style={styles.title}>Doughnut</Text>
              <PieChart chart_wh={chart_wh} series={series} sliceColor={sliceColor} doughnut={true} coverRadius={0.65} coverFill={'#FFF'} />*/}
            <ScrollableTabView renderTabBar={() => <ScrollableTabBar />}>
              <PieChartPage tabLabel="Pie-Chart" />
              <BarChartPage tabLabel="Bar-Chart" />
              <BarChartWithX_Axis tabLabel="Bar-Chart-XAxis" />
              <LineChartsPage tabLabel="Line-Chart" />
              <LineChartWithX_Axis tabLabel="Line-Chart-XAxis" />
              <LineChartWithY_Axis tabLabel="Line-Chart-YAxis" />
              <ProgressCirclePage tabLabel="Progress-Circle" />
              <StackedBarChartPage tabLabel="Stacked-Bar-Chart" />
            </ScrollableTabView>
          </View>
        </LinearGradient>
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
export default ChartPage
