/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity, ListView, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Actions } from 'react-native-router-flux'
import CustomNavbar from './CustomNavbar'
type Props = {}
var staticArray = [
  {
    name: 'John',
    data: 'Hi, my name is',
    image: require('../Images/icon.png')
  },
  {
    name: 'David',
    data: 'Hi, my name is',
    image: require('../Images/icon.png')
  },
  {
    name: 'Micheal',
    data: 'Hi, my name is',
    image: require('../Images/icon.png')
  },
  {
    name: 'Jenny',
    data: 'Hi, my name is',
    image: require('../Images/icon.png')
  },
  {
    name: 'Jersy',
    data: 'Hi, my name is',
    image: require('../Images/icon.png')
  }
]
class List extends Component<Props> {
  constructor() {
    super()

    this.state = {
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    }
  }
  componentWillMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(staticArray)
    })
  }
  rowData(listItem) {
    return (
      <View style={{ height: 75, justifyContent: 'center', borderBottomWidth: 0.5, borderColor: '#ffffff', flexDirection: 'row' }}>
        <View style={{ flex: 0.15, justifyContent: 'center' }}>
          <Image style={{ width: 50, height: 50, marginLeft: 5 }} source={listItem.image} />
        </View>
        <View style={{ flex: 0.85, justifyContent: 'center' }}>
          <Text style={styles.buttonText}>{listItem.name}</Text>
          <Text style={[styles.buttonText, { fontSize: 16 }]}>
            {listItem.data} {listItem.name}
          </Text>
        </View>
      </View>
    )
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient colors={['#ba8b02', '#181818']} style={styles.container}>
          <ListView dataSource={this.state.dataSource} renderRow={this.rowData.bind(this)} />
        </LinearGradient>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    // textAlign: 'center',
    // marginLeft: 10,
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
export default List
