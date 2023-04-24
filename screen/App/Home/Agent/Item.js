import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { Icon, Text, View } from 'native-base'

import styles from '../styles'

import theme from '@theme/styles'
import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'

export default class extends React.Component {
  render () {
    const item = this.props.item

    return (
      <>
        <TouchableOpacity
          style={styles.agentItem}
          onPress={() => {
            navigate('PublicMembers')
          }}
        >
          <View>
            <Image source={{ uri: item.image }} style={styles.agentImg} resizeMode='cover' />
          </View>
          <View style={styles.agentContent}>
            <Text style={styles.agentName}>{item['name_' + this.props.language] || item.name}</Text>
          </View>
        </TouchableOpacity>
      </>
    )
  }
}
