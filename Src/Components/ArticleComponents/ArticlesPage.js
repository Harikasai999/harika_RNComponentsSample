/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity, ListView, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import colors from './../../Themes/Colors'

import SubArticle from './SubArticle'

var array = [
  {
    profile_name: 'Sanju',
    article_img: require('./../../../Images/flower1.png'),
    description:
      'A flower is a special kind of plant part. Flowers have petals. Inside the part of the flower that has petals are the parts which produce pollen and seeds. Flowers are the reproductive structure of flowering plants, which are plants of the division Magnoliophyta, also called the Angiosperms.'
  },
  {
    profile_name: 'Vishnu',
    article_img: require('./../../../Images/flower2.png'),
    description:
      'A flower is a special kind of plant part. Flowers have petals. Inside the part of the flower that has petals are the parts which produce pollen and seeds. Flowers are the reproductive structure of flowering plants, which are plants of the division Magnoliophyta, also called the Angiosperms.'
  },
  {
    profile_name: 'Naini',
    article_img: require('./../../../Images/flower3.png'),
    description:
      'A flower is a special kind of plant part. Flowers have petals. Inside the part of the flower that has petals are the parts which produce pollen and seeds. Flowers are the reproductive structure of flowering plants, which are plants of the division Magnoliophyta, also called the Angiosperms.'
  },
  {
    profile_name: 'Latha',
    article_img: require('./../../../Images/flower4.png'),
    description:
      'A flower is a special kind of plant part. Flowers have petals. Inside the part of the flower that has petals are the parts which produce pollen and seeds. Flowers are the reproductive structure of flowering plants, which are plants of the division Magnoliophyta, also called the Angiosperms.'
  }
]

type Props = {}
export default class Articles extends Component<Props> {
  constructor() {
    super()
    this.state = {
      //dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    }
  }
  //
  // <ListView dataSource={this.state.dataSource} renderRow={this.renderItem.bind(this)} />
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {array.map((item, key) => {
            return <SubArticle res={item} />
          })}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})
