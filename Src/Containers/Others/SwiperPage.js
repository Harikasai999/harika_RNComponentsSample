/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, View, ListView, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import CustomNavbar from './../../Components/CustomNavbar'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'
import GridView from 'react-native-super-grid'
import { Actions } from 'react-native-router-flux'
import colors from './../../Themes/Colors'
import Swiper from 'react-native-swiper'
const window = Dimensions.get('window')
var items = [{ title: 'Hello Swiper', css: 'pink' }, { title: 'Beautiful', css: 'yellow' }, { title: 'And simple', css: 'lightblue' }]

type Props = {}
export default class SwiperPage extends Component<Props> {
  constructor() {
    super()

    this.state = {
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
      // items: []
    }
  }
  onButton() {
    Actions.login()
  }
  componentWillMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(items)
    })
  }
  // componentDidMount() {
  //   this.setState({
  //
  //   })
  // }
  renderItem(Item) {
    return (
      <TouchableOpacity onPress={this.onButton.bind(this)}>
        <View style={[styles.rowDataView, { backgroundColor: Item.backgroundColor }]}>
          <Text style={styles.buttonText}>{Item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={[colors.lg_color1, colors.lg_color2, colors.lg_color3]} start={{ x: 0.0, y: 0.5 }} end={{ x: 1.0, y: 0.5 }} locations={[0.0, 1.0]}>
          <View style={{ height: 44 }}>
            <CustomNavbar title="Auth" />
          </View>
        </LinearGradient>
        <View style={styles.container}>
          <View style={{ flex: 0.4 }}>
            <Swiper
              dot={<View style={{ backgroundColor: 'green', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
              activeDot={<View style={{ backgroundColor: 'lightgreen', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
              paginationStyle={{
                bottom: 10
              }}
              loop={false}
            >
              {items.map((item, key) => {
                return (
                  <View
                    key={key}
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: item.css
                    }}
                  >
                    <Text style={styles.text}>{item.title}</Text>
                  </View>
                )
              })}
            </Swiper>
          </View>
          <View style={{ flex: 0.6 }} />
          {/*<ListView dataSource={this.state.dataSource} renderRow={this.renderItem.bind(this)} />*/}
        </View>
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
    height: window.height,
    width: window.width
  },
  buttonText: { color: 'white', fontWeight: '600', fontSize: 16, marginLeft: 15 },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
