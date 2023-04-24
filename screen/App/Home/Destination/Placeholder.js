import React from 'react'
import { View } from 'native-base'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

export default class extends React.Component {
  render () {
    return (
      <Placeholder
        Animation={Fade}
      >
        <View style={styles.featuredAds}>
          <View>
            <PlaceholderLine style={styles.featuredAdsImg} />
          </View>
          <View style={styles.featuredContent}>
            <PlaceholderLine width={80} style={styles.featuredAdsTitle} />
            <PlaceholderLine width={30} />
          </View>
          <View style={styles.featuredAdsPosted}>
            <PlaceholderLine width={20} />
            <PlaceholderLine width={20} />
            <PlaceholderLine width={20} />
          </View>
        </View>
      </Placeholder>
    )
  }
}
