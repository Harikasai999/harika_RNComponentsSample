/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { TextField } from 'react-native-material-textfield'
import { Actions } from 'react-native-router-flux'
import CustomNavbar from './../Components/CustomNavbar'
import TextInputField from './../Components/TextInputField'
type Props = {}
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
var array = [
  {
    state_value: '',
    label_name: 'Email'
  },
  {
    state_value: '',
    label_name: 'Password'
  }
]
class Login extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  onChangeText(text) {
    alert('' + text)
    // this.setState({
    // email:
    // })
  }

  render() {
    var label = 'Email'
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient colors={['#243b55', '#141e30', '#243b55']} start={{ x: 0.0, y: 0.5 }} end={{ x: 1.0, y: 0.5 }} locations={[0.0, 1.0]} style={styles.container}>
          <View style={{ height: 44 }}>
            <CustomNavbar title="Login" />
          </View>
          <View styles={styles.container}>
            {array.map((res, key) => {
              return <TextInputField stateValue={res.state_value} Label={res.label_name} onChangeFunc={this.onChangeText.bind(this)} reference={res.label_name} />
            })}
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
export default Login
