/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity, ListView, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import colors from './../../Themes/Colors'

type Props = {}
export default class Profile extends Component<Props> {
  constructor() {
    super()
    this.state = {
      //dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Single Article </Text>
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
