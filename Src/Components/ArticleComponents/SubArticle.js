import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import CardView from 'react-native-cardview'
import Icon from 'react-native-vector-icons/FontAwesome'
import colors from './../..//Themes/Colors'
const window = Dimensions.get('window')
type Props = {}
export default class SubArticle extends Component<Props> {
  componentWillMount() {
    // alert(window.height)
  }
  render() {
    // alert(this.props.resImg)
    return (
      <View style={styles.container}>
        <CardView style={styles.cardStyle} cardElevation={5} cardMaxElevation={5} cornerRadius={10}>
          <View style={styles.container}>
            <View style={[styles.profileView, { marginLeft: 15 }]}>
              <Image style={{ height: window.width / 15, width: window.width / 15, borderRadius: window.width / 30 }} source={this.props.res.article_img} />
              <Text style={styles.headingText}>{this.props.res.profile_name}</Text>
            </View>
            <View style={styles.imageView}>
              <Image style={{ height: window.width / 2, width: window.width / 1.2, marginTop: 15 }} source={this.props.res.article_img} />
            </View>
            <View style={styles.bottomView}>
              <View style={styles.iconView}>
                <Text style={styles.iconText}>Like</Text>
                <Icon name={'thumbs-up'} size={window.width / 22} color="black" />
              </View>

              <View style={styles.iconView}>
                <Text style={styles.iconText}>Share</Text>
                <Icon name={'share-square'} size={window.width / 22} color="black" />
              </View>

              <View style={styles.iconCommentView}>
                <Text style={styles.iconText}>Comment</Text>
                <Icon name={'comment'} size={window.width / 22} color="black" />
              </View>
            </View>
          </View>
        </CardView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'

    // backgroundColor: 'white'
  },
  cardStyle: {
    flex: 1,
    height: Platform.OS == 'ios' ? window.height / 2.3 : window.height / 2, //Platform.OS == 'ios' ? 300 : 325
    margin: Platform.OS == 'ios' ? 10 : 5
  },
  profileView: {
    flex: 0.15,
    alignItems: 'center',
    flexDirection: 'row'
    // backgroundColor: 'orange'
  },
  bottomView: {
    flex: 0.25,
    alignItems: 'center',
    flexDirection: 'row'
  },
  imageView: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headingText: {
    fontSize: window.width / 26,
    fontWeight: '800',
    color: '#243b55',
    marginLeft: 5
  },
  emptyView: {
    flex: 0.1
  },
  iconView: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'pink',
    flexDirection: 'row'
  },
  iconCommentView: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'pink',
    flexDirection: 'row'
  },
  iconText: {
    fontSize: window.width / 26,
    fontWeight: '600',
    color: '#243b55',
    marginRight: 5
  }
})
