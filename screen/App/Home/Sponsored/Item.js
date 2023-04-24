import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { Icon, Text, View } from 'native-base'

import styles from './../styles'

import theme from '@theme/styles'
import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'

export default class extends React.Component {
  render() {
    const item = this.props.item

    return (
      <>
        <TouchableOpacity style={styles.featuredAds} underlayColor='transparent' onPress={() => { navigate('PublicAds') }}>
          <View>
            <View>
              <Image source={{ uri: item.image }} style={styles.featuredAdsImg} />
            </View>
            <Text style={styles.featuredAdsTitle}>{item['title_' + this.props.language] || item.title}</Text>
            <Text style={styles.featuredAdsLocation}>{item['location_' + this.props.language] || item.location}</Text>
            <View style={styles.featuredAdsBg}>
              <View>
                <Text style={styles.featuredAdsPrice}>{item.price}</Text>
              </View>
              <View style={styles.featuredAdsPosted}>
                <Icon name='calendar' type='FontAwesome' style={styles.featuredAdsIcon} />
                <Text style={styles.featuredAdsDate}>{item.date}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </>
    )
  }
}
