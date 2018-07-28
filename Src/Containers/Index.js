/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity, Animated, Image, Easing, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Actions } from 'react-native-router-flux'
import CustomNavbar from './../Components/CustomNavbar'
import GridView from 'react-native-super-grid'
import Icon from 'react-native-vector-icons/FontAwesome'
import colors from './../Themes/Colors'
const window = Dimensions.get('window')
var array = [
  {
    button_name: 'Auth',
    icon_name: 'lock'
  },

  {
    button_name: 'Social',
    icon_name: 'user-circle'
  },
  {
    button_name: 'Messaging',
    icon_name: 'envelope'
  },
  {
    button_name: 'Articles',
    icon_name: 'book'
  },
  {
    button_name: 'E-commerce',
    icon_name: 'credit-card'
  },
  {
    button_name: 'Others',
    icon_name: 'bars'
  }
]
type Props = {}

class Index extends Component<Props> {
  constructor() {
    super()
    this.spinValue = new Animated.Value(0)
  }
  componentDidMount() {
    this.spin()
  }
  spin() {
    this.spinValue.setValue(0)
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear
    }).start(() => this.spin())
  }
  onButton(Item) {
    // alert(JSON.stringify(Item))
    if (Item.button_name == 'Auth') {
      Actions.auth()
    } else if (Item.button_name == 'Messaging') {
      Actions.message()
    } else if (Item.button_name == 'Articles') {
      Actions.articles()
    } else {
      alert('GASdghjg')
    }
  }
  renderItem(Item) {
    return (
      <TouchableOpacity onPress={this.onButton.bind(this, Item)}>
        <View style={styles.itemContainer}>
          <Icon name={Item.icon_name} size={window.width / 20} color="white" />
          <Text style={styles.buttonText} numberOfLines={1}>
            {Item.button_name}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    return (
      <View style={{ flex: 1 }}>
        <LinearGradient colors={[colors.lg_color1, colors.lg_color2, colors.lg_color3]} start={{ x: 0.0, y: 0.5 }} end={{ x: 1.0, y: 0.5 }} locations={[0.0, 1.0]} style={styles.container}>
          <View style={{ height: 44 }}>
            <CustomNavbar title="React-Native" />
          </View>

          <View style={{ flex: 1 }}>
            <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
              <Animated.Image
                style={[styles.imageStyles, { transform: [{ rotate: spin }] }]}
                source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png' }}
              />
            </View>
            <View style={styles.welcomeView}>
              <Text style={styles.welcomeText}>Welcome to React-Native</Text>
            </View>
            <View style={{ flex: 0.7 }}>
              <GridView itemDimension={100} items={array} renderItem={this.renderItem.bind(this)} />
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
    // backgroundColor: 'white'
  },
  buttonText: {
    fontSize: window.width / 22,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  },
  buttonView: {
    height: window.width / 1.5,
    width: window.width / 3
  },
  itemContainer: {
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: 'white',
    alignItems: 'center',
    borderWidth: 0.9,
    padding: 10
    // height: 150
  },
  welcomeText: { fontSize: window.width / 22, fontWeight: '800', color: 'white' },
  welcomeView: { flex: 0.05, alignItems: 'center', justifyContent: 'center' },
  imageStyles: {
    width: window.width / 4, //2.6
    height: window.width / 4.5
    // backgroundColor: 'white'
  }
})
export default Index
