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
        <View style={styles.agentItem}>
          <View style={styles.agentContent}>
            <PlaceholderLine style={styles.agentImg} />
            <PlaceholderLine width={50}  />
          </View>
        </View>
      </Placeholder>
    )
  }
}
