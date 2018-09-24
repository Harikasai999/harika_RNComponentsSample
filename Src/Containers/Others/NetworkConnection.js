import React, { PureComponent } from 'react'
import { View, Text, NetInfo, Dimensions, StyleSheet, ListView, Alert, Platform } from 'react-native'

const { width } = Dimensions.get('window')

class NetworkConnection extends PureComponent {
  state = {
    isConnected: true,
    dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange)
    return fetch('https://reactnativecode.000webhostapp.com/FruitsList.php')
      .then(response => response.json())
      .then(responseJson => {
        // let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        this.setState({
          isLoading: false,
          dataSource: this.state.dataSource.cloneWithRows(responseJson)
        })
      })
      .catch(error => {
        console.log('eeerroorrr')
      })
  }
  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange)
  }

  handleConnectivityChange = isConnected => {
    if (isConnected) {
      this.setState({ isConnected })
    } else {
      this.setState({ isConnected })
    }
  }
  GetListViewItem(fruit_name) {
    Alert.alert(fruit_name)
  }
  render() {
    if (!this.state.isConnected) {
      return (
        <View style={styles.offlineContainer}>
          <Text style={styles.offlineText}>No Internet Connection</Text>
        </View>
      )
    }
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.onlineContainer}>
          <Text style={styles.onlineText}>Internet Connected Successfully</Text>
        </View>
        <View style={styles.listContainer}>
          <ListView
            dataSource={this.state.dataSource}
            renderSeparator={this.ListViewItemSeparator}
            renderRow={rowData => (
              <Text style={styles.rowViewContainer} onPress={this.GetListViewItem.bind(this, rowData.fruit_name)}>
                {rowData.fruit_name}
              </Text>
            )}
            style={{ marginTop: 10 }}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
    top: 30
  },
  offlineText: { color: '#fff' },
  onlineContainer: {
    backgroundColor: 'green',
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  onlineText: { color: '#fff' },
  listContainer: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rowViewContainer: {
    fontSize: 17,
    padding: 10
  }
})

export default NetworkConnection
