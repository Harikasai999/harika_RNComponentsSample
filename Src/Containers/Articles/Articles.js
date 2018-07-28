/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity, ListView, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import colors from './../../Themes/Colors'
import CustomNavbar from './../../Components/CustomNavbar'
import ArticlesPage from './../../Components/ArticleComponents/ArticlesPage'
import Profile from './../../Components/ArticleComponents/Profile'
import SingleArticle from './../../Components/ArticleComponents/SingleArticle'

type Props = {}
export default class Articles extends Component<Props> {
  constructor() {
    super()
    this.state = {
      //dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={[colors.lg_color1, colors.lg_color2, colors.lg_color3]} start={{ x: 0.0, y: 0.5 }} end={{ x: 1.0, y: 0.5 }} locations={[0.0, 1.0]} style={styles.container}>
          <View style={{ height: 44 }}>
            <CustomNavbar title="Articles" />
          </View>
          <View style={styles.container}>
            <ScrollableTabView>
              <ArticlesPage tabLabel="Articles" />
              <Profile tabLabel="Profile" />
              <SingleArticle tabLabel="Article" />
            </ScrollableTabView>
          </View>
        </LinearGradient>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})
