/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, View, ListView, Text, TouchableOpacity, Dimensions } from 'react-native'
import CustomNavbar from './../../Components/CustomNavbar'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'
import colors from './../../Themes/Colors'
import { Actions } from 'react-native-router-flux'
const window = Dimensions.get('window')
var array = [
  {
    button_name: 'Chat',
    icon_name: 'envelope'
  },

  {
    button_name: 'Chat List',
    icon_name: 'list'
  }
]

type Props = {}
export default class Message extends Component<Props> {
  constructor() {
    super()

    this.state = {
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    }
  }
  onButton(Item) {
    if (Item.button_name == 'Chat') {
      Actions.chat()
    } else {
      Actions.chatList()
    }
  }
  componentWillMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(array)
    })
  }
  renderItem(Item) {
    return (
      <TouchableOpacity onPress={this.onButton.bind(this, Item)}>
        <View style={styles.rowDataView}>
          <View style={styles.itemContainer}>
            <Icon name={Item.icon_name} size={window.width / 22} color="white" style={{ marginLeft: 5 }} />
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
            <CustomNavbar title="Message" />
          </View>
          <ListView dataSource={this.state.dataSource} renderRow={this.renderItem.bind(this)} />
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
    height: window.width / 7
  },
  buttonText: { color: 'white', fontWeight: '600', fontSize: window.width / 25, marginLeft: 15 }
})
