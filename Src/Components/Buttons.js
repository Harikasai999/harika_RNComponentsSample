/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

type Props = {}
class Buttons extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.buttonView}>
          <LinearGradient colors={['#ba8b02', '#181818']} start={{ x: 0.0, y: 0.5 }} end={{ x: 1.0, y: 0.5 }} locations={[0.0, 1.0]} style={styles.linearGradient}>
            <Text style={styles.buttonText}>Load More</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: 'white'
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  },
  buttonView: {
    paddingLeft: 20,
    paddingRight: 20
  },
  linearGradient: {
    marginTop: 10,
    borderRadius: 5
  }
})
export default Buttons
