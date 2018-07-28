/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, View, ListView, Text, TouchableOpacity, TextInput, Dimensions } from 'react-native'
import CustomNavbar from './../../Components/CustomNavbar'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Actions } from 'react-native-router-flux'
import colors from './../../Themes/Colors'
var array = [
  {
    name: 'Madhu',
    image: 'user-circle',
    text: 'Hi, how are you???'
  },

  {
    name: 'Sanju',
    image: 'user-circle',
    text: 'Hi, how are you???'
  },
  {
    name: 'Vijju',
    image: 'user-circle',
    text: 'Hi, how are you???'
  },

  {
    name: 'Aparna',
    image: 'user-circle',
    text: 'Hi, how are you???'
  },
  {
    name: 'Sailaja',
    image: 'user-circle',
    text: 'Hi, how are you???'
  },

  {
    name: 'Vishnu',
    image: 'user-circle',
    text: 'Hi, how are you???'
  }
]
const window = Dimensions.get('window')
type Props = {}
export default class ChatList extends Component<Props> {
  constructor() {
    super()
    this.state = {
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
      text: ''
    }
    this.arrayholder = []
  }
  onButton() {
    Actions.chat()
  }
  componentDidMount() {
    this.arrayholder = array
  }
  SearchFilterFunction(text) {
    const newData = this.arrayholder.filter(function(item) {
      const itemData = item.name.toUpperCase()
      const textData = text.toUpperCase()
      return itemData.indexOf(textData) > -1
    })
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newData),
      text: text
    })
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
            <View style={styles.iconContainer}>
              <Icon name={Item.image} size={30} color="white" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>{Item.name}</Text>
              <Text style={styles.bodyTextStyle}>{Item.text}</Text>
            </View>
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
            <CustomNavbar title="Chat List" />
          </View>
          <View style={styles.container}>
            <View style={styles.searchbarContainer}>
              <View style={styles.textInputStyle}>
                <Icon name={'search'} size={window.width / 22} color="black" />

                <TextInput
                  style={{ fontSize: window.width / 25, marginLeft: 2, width: 300, height: 40 }}
                  placeholder="Search by name"
                  placeholderTextColor="black"
                  underlineColorAndroid={'transparent'}
                  onChangeText={text => this.SearchFilterFunction(text)}
                  value={this.state.text}
                />
              </View>
            </View>
            <View style={styles.listViewContainer}>
              <ListView dataSource={this.state.dataSource} renderRow={this.renderItem.bind(this)} />
            </View>
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
    alignItems: 'center'
  },
  rowDataView: {
    height: window.width / 5
  },
  iconContainer: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    flex: 0.85,
    justifyContent: 'center'
  },
  listViewContainer: {
    flex: 0.9
  },
  searchbarContainer: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: { color: 'white', fontWeight: '700', fontSize: window.width / 25 },
  bodyTextStyle: { color: 'white', fontWeight: '600', fontSize: window.width / 27, marginTop: 5 },
  textInputStyle: {
    height: Platform.OS == 'ios' ? window.width / 10 : 45, //35
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 20,
    width: window.width / 1.1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 5,
    flexDirection: 'row'
  }
})
