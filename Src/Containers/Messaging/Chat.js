import React, { Component } from 'react'
import { Platform, StyleSheet, View, ListView, Text, TouchableOpacity } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import CustomNavbar from './../../Components/CustomNavbar'
import LinearGradient from 'react-native-linear-gradient'
import colors from './../../Themes/Colors'
/***************************
 * Documentation: https://github.com/aksonov/react-native-router-flux
 ***************************/

export default class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
  }
  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hi how are you',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any'
          }
        },
        {
          _id: 3,
          text: 'Hello',
          createdAt: new Date(),
          user: {
            _id: 4,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any'
          }
        }
      ]
    })
  }
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }))
  }
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={[colors.lg_color1, colors.lg_color2, colors.lg_color3]} start={{ x: 0.0, y: 0.5 }} end={{ x: 1.0, y: 0.5 }} locations={[0.0, 1.0]} style={styles.container}>
          <View style={{ height: 44 }}>
            <CustomNavbar title="Chat" />
          </View>
          <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            placeholder="Type a message here..."
            user={{
              _id: 1
            }}
          />
        </LinearGradient>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
