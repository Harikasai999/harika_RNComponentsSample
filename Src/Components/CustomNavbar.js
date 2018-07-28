/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
type Props = {}
const window = Dimensions.get('window')
class CustomNavbar extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.title
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconView}>
          {this.state.title == 'React-Native' ? (
            <TouchableOpacity onPress={() => Actions.pop()}>
              <Icon name={'ellipsis-h'} size={20} color="white" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => Actions.pop()}>
              <Icon name={'angle-left'} size={window.width / 15} color="white" />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.headingView}>
          <Text style={styles.buttonText}>{this.state.title}</Text>
        </View>
        <View style={styles.iconView} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent'
  },
  buttonText: {
    fontSize: window.width / 22,
    textAlign: 'center',
    fontWeight: '600',
    color: 'white'
  },
  iconView: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'transparent'
  },
  headingView: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'transparent'
  }
})
export default CustomNavbar
