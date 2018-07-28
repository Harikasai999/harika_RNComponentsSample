/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity, ListView, ScrollView, ImageBackground, ActivityIndicator, Dimensions, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'
import colors from './../../Themes/Colors'
var ImagePicker = require('react-native-image-picker')
var options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}
const window = Dimensions.get('window')
type Props = {}
export default class Profile extends Component<Props> {
  constructor() {
    super()
    this.state = {
      avatarSource: null,
      spinner: false
      //dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    }
  }
  selectPhotoTapped() {
    this.setState({
      spinner: true
    })
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    }

    ImagePicker.showImagePicker(options, response => {
      console.log('Response@@@@: ' + JSON.stringify(response))

      if (response.didCancel) {
        this.setState({
          spinner: false
        })
        console.log('User cancelled photo picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        let source = { uri: response.uri }

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
          spinner: false
        })
      }
    })
  }
  render() {
    // alert(this.state.spinner)
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View style={{ flex: 0.5, backgroundColor: 'white' }}>
            <View style={{ flex: 0.8, width: window.width, backgroundColor: 'lightblue' }}>
              <Image source={require('./../../../Images/flower3.png')} style={{ ...StyleSheet.absoluteFillObject }} />
            </View>
            <View style={{ flex: 0.2, width: window.width, backgroundColor: 'lightblue' }} />
            <View style={{ height: 100, width: 100, borderRadius: 60, backgroundColor: 'yellow', elevation: 3, bottom: 3, position: 'absolute', alignSelf: 'center' }} />
          </View>
          <View style={{ flex: 0.5, backgroundColor: 'white' }} />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  avatarContainer: {
    borderColor: 'white',
    borderWidth: 1, //PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'

    // marginTop: window.width / 5
  },
  avatar: {
    borderRadius: window.width / 5.6, //75,
    width: window.width / 2.8,
    height: window.width / 2.8
  },
  backgroundImageView: {
    marginLeft: 10,
    marginTop: 10,
    height: 50,
    width: 50,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textHeadingStyle: { color: 'white', fontWeight: '900', fontSize: 20 },
  textStyle: { color: 'white', fontWeight: '700', fontSize: 16, textAlign: 'center' }
})
