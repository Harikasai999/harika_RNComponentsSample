import React, { PureComponent } from 'react'
import { View, Text, NetInfo, Dimensions, StyleSheet, ListView, Alert, Platform, ActivityIndicator } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import colors from './../../Themes/Colors'
import CustomNavbar from './../../Components/CustomNavbar'
const { width } = Dimensions.get('window')

class NetworkConnection extends PureComponent {
  state = {
    isConnected: true,
    dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
    spinner: false
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange)
    this.setState({
      spinner: true
    })
    return fetch('https://reactnativecode.000webhostapp.com/FruitsList.php')
      .then(response => response.json())
      .then(responseJson => {
        // let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        alert('jdhfhjghjg' + JSON.stringify(responseJson))
        this.setState({
          isLoading: false,
          spinner: false,
          dataSource: this.state.dataSource.cloneWithRows(responseJson)
        })
      })
      .catch(error => {
        // alert('error1236547' + JSON.stringify(error))
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
    return (
      <View style={styles.container}>
        <LinearGradient colors={[colors.lg_color1, colors.lg_color2, colors.lg_color3]} start={{ x: 0.0, y: 0.5 }} end={{ x: 1.0, y: 0.5 }} locations={[0.0, 1.0]}>
          <View style={{ height: 44 }}>
            <CustomNavbar title="Network Connection" />
          </View>
        </LinearGradient>
        <View style={styles.container}>
          {!this.state.isConnected ? (
            <View style={styles.container}>
              <View style={styles.offlineContainer}>
                <Text style={styles.offlineText}>No Internet Connection</Text>
              </View>
            </View>
          ) : (
            <View style={styles.container}>
              <View style={styles.onlineContainer}>
                <Text style={styles.onlineText}>Internet Connected Successfully</Text>
              </View>
              <View style={styles.listContainer}>
                {this.state.spinner ? (
                  <ActivityIndicator color="black" size="large" />
                ) : (
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
                )}
              </View>
            </View>
          )}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  offlineContainer: {
    backgroundColor: '#b52424',
    flex: 0.05,
    justifyContent: 'center',
    alignItems: 'center'
  },
  offlineText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  onlineContainer: {
    backgroundColor: 'green',
    flex: 0.05,
    justifyContent: 'center',
    alignItems: 'center'
  },
  onlineText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  listContainer: {
    flex: 0.95,
    justifyContent: 'center'
    // alignItems: 'center'
  },
  rowViewContainer: {
    fontSize: 17,
    padding: 10
  }
})

export default NetworkConnection
