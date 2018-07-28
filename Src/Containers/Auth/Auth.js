/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, View, ListView, Text, TouchableOpacity } from 'react-native'
import CustomNavbar from './../../Components/CustomNavbar'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'
import GridView from 'react-native-super-grid'
import { Actions } from 'react-native-router-flux'
import colors from './../../Themes/Colors'
var array = [
  {
    button_name: 'Login Version 1',
    icon_name: 'lock'
  },

  {
    button_name: 'Login Version 2',
    icon_name: 'lock'
  },
  {
    button_name: 'Sign-Up',
    icon_name: 'sign-in'
  },
  {
    button_name: 'Forgot Password',
    icon_name: 'key'
  }
]

type Props = {}
export default class Auth extends Component<Props> {
  constructor() {
    super()

    this.state = {
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    }
  }
  onButton() {
    Actions.login()
  }
  componentWillMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(array)
    })
  }

  renderItem(Item) {
    return (
      <TouchableOpacity onPress={this.onButton.bind(this)}>
        <View style={styles.rowDataView}>
          <View style={styles.itemContainer}>
            <Icon name={Item.icon_name} size={20} color="white" style={{ marginLeft: 5 }} />
            <Text style={styles.buttonText}>{Item.button_name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={[colors.lg_color1, colors.lg_color2, colors.lg_color3]} start={{ x: 0.0, y: 0.5 }} end={{ x: 1.0, y: 0.5 }} locations={[0.0, 1.0]} style={styles.container}>
          <View style={{ height: 44 }}>
            <CustomNavbar title="Auth" />
          </View>
          <View style={styles.container}>
            <ListView dataSource={this.state.dataSource} renderRow={this.renderItem.bind(this)} />
          </View>
        </LinearGradient>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  itemContainer: {
    flexDirection: 'row',
    flex: 1,
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
    marginLeft: 5,
    alignItems: 'center'
  },
  rowDataView: {
    height: 75
  },
  buttonText: { color: 'white', fontWeight: '600', fontSize: 16, marginLeft: 15 }
})
