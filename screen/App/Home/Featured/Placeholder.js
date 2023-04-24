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
        <View style={styles.featuredItem}>
          <View>
            <PlaceholderLine style={styles.btnImg} />
          </View>
          <View style={styles.featuredContent}>
            <PlaceholderLine width={80} style={styles.btnText} />
            <PlaceholderLine width={30} />
          </View>
          <View style={styles.featuredContent2}>
            <PlaceholderLine width={20} />
            <PlaceholderLine width={20} />
            <PlaceholderLine width={20} />
          </View>
        </View>
      </Placeholder>
    )
  }
}
