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
        <TouchableOpacity style={styles.featuredAds} underlayColor='transparent' onPress={() => { navigate('PublicAdsDetail') }}>
          <View>
            <View>
              <Image source={{ uri: item.image }} style={styles.featuredAdsImg} />
              <Icon name='bookmark' type='FontAwesome' style={styles.featuredAdsFavorite} />
            </View>
            <Text style={styles.featuredAdsTitle}>{item['title_' + this.props.language] || item.title}</Text>
            <Text style={styles.featuredAdsLocation}>{item['location_' + this.props.language] || item.location}</Text>
            <View style={styles.iconLayout}>
              <Icon name='star' type='FontAwesome' style={styles.ratingIcon} />
              <Icon name='star' type='FontAwesome' style={styles.ratingIcon} />
              <Icon name='star' type='FontAwesome' style={styles.ratingIcon} />
              <Icon name='star-half-empty' type='FontAwesome' style={styles.ratingIcon} />
              <Icon name='star-half-empty' type='FontAwesome' style={styles.ratingIcon} />
              <Text style={styles.reviewText}>{__('( 115 Reviews )')}</Text>
            </View>
            <View style={styles.featuredAdsBg}>
              <View>
                <Text style={styles.featuredAdsPrice}>{item.price}</Text>
              </View>
              <View style={styles.featuredAdsPosted}>
                <Icon name='calendar' type='FontAwesome' style={styles.featuredAdsIcon} />
                <Text style={styles.featuredAdsDate}>{item.date}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.bookBtn}>
              <Text style={styles.bookBtnText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </>
    )
  }
}
