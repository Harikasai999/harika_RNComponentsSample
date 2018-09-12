/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput } from 'react-native'

type Props = {}
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

class SignUp extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      userName: ''
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 25, fontWeight: '700' }}>Login</Text>
        </View>
        <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ height: width / 10.5, width: width / 1.1, borderRadius: 5, borderColor: 'grey', borderWidth: 1, justifyContent: 'center' }}>
            <TextInput value={this.state.email} onChangeFunc={text => this.setState({ email: text })} placeholder="Email" style={{ padding: 6, fontSize: 16 }} />
          </View>
          <View style={{ height: width / 10.5, width: width / 1.1, borderRadius: 5, borderColor: 'grey', borderWidth: 1, justifyContent: 'center', marginTop: width / 37.5 }}>
            <TextInput value={this.state.password} onChangeFunc={text => this.setState({ password: text })} placeholder="Password" style={{ padding: 6, fontSize: 16 }} secureTextEntry={true} />
          </View>
        </View>
        <View style={{ flex: 0.05, justifyContent: 'flex-start', alignItems: 'flex-end' }}>
          <TouchableOpacity>
            <Text style={{ fontSize: 14, fontWeight: '700', textDecorationLine: 'underline', marginRight: width / 18.75 }}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.1, flexDirection: 'row' }}>
          <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
            <TouchableOpacity>
              <View
                style={{
                  height: width / 7.5,
                  width: width / 3,
                  borderRadius: 5,
                  borderColor: 'grey',
                  borderWidth: 1,
                  justifyContent: 'center',
                  marginTop: width / 37.5,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text>SignIn</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
            <TouchableOpacity>
              <View
                style={{
                  height: width / 7.5,
                  width: width / 3,
                  borderRadius: 5,
                  borderColor: 'grey',
                  borderWidth: 1,
                  justifyContent: 'center',
                  marginTop: width / 37.5,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text>SignUp</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View styles={{ flex: 0.15 }} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  subContainer: {
    flex: 1,

    paddingRight: 30,
    paddingLeft: 30
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    color: 'white',
    padding: 10,
    backgroundColor: 'transparent'
  },
  headerText: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '800',
    color: 'white',
    marginTop: 50,
    backgroundColor: 'transparent'
  },
  buttonView: {
    marginTop: 15,

    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 1
  },
  viewBorder: {
    height: 500,
    width: 300,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 2
  },

  labelTextStyle: {
    padding: 5
  },
  linearGradient: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'white'
  }
})
export default SignUp
