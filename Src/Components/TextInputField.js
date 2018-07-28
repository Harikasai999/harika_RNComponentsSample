/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { TextField } from 'react-native-material-textfield'
type Props = {}
class TextInputField extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      stateValue: this.props.stateValue,
      label: this.props.Label,
      reference: this.props.reference
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextField
          ref={this.state.reference}
          label={this.state.label}
          value={this.state.stateValue}
          onChangeText={this.props.onChangeFunc}
          baseColor="white"
          containerStyle={styles.input}
          labelTextStyle={styles.labelTextStyle}
          inputContainerStyle={styles.labelTextStyle}
          textColor="white"
          tintColor="white"
          lineWidth={1}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 75,
    paddingRight: 30,
    paddingLeft: 30,
    backgroundColor: 'transparent'
    // backgroundColor: 'white'
  },

  labelTextStyle: {
    padding: 5
  }
})
export default TextInputField
