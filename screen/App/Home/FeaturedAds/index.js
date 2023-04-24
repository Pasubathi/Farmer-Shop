import React from 'react'
import { FlatList, Image, TouchableOpacity } from 'react-native'
import { View, Text, Icon } from 'native-base'

import Item from './Item'
import Placeholder from './Placeholder'
import { __ } from '@utility/translation'
import { navigate } from '@utility/navigation'

import styles from '../styles'
import theme from '@theme/styles'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.renderTemplate = this.renderTemplate.bind(this)
    this.renderItem = this.renderItem.bind(this)
  }

  renderTemplate() {
    return <Placeholder />
  }

  renderItem({ item }) {
    return (
      <Item
        language={this.props.language}
        item={item}
      />
    )
  }

  render() {
    return (
      <>
        <View style={styles.featuredAdContainer}></View>
        <View style={styles.featuredAdsHeader}>
          <View style={styles.sponsoredCol}>
            <Icon name='clock' type='Feather' style={[theme.grey, theme.huge]} />
            <Text style={styles.sponsoredTitle}>{__('Featured Ads')}</Text>
          </View>
          <TouchableOpacity style={styles.btnMore} onPress={() => { navigate('PublicAds') }}>
            <Image source={require('@asset/images/dot.png')} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.props.fetching ? [1, 2] : this.props.list}
          horizontal
          contentContainerStyle={{ paddingHorizontal: 10 }}
          showsHorizontalScrollIndicator={false}
          renderItem={this.props.fetching ? this.renderTemplate : this.renderItem}
        />
      </>
    )
  }
}
