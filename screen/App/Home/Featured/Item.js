import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { Icon, Text, View } from 'native-base'

import styles from './../styles'

import theme from '@theme/styles'
import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'

export default class extends React.Component {
  render () {
    const item = this.props.item

    return (
      <>
        <TouchableOpacity  style={styles.btnBox} underlayColor='transparent' onPress={() => { navigate('PublicAds') }}>
          <View>
            <Image source={ item.image } style={styles.btnImg} />
            <Text style={styles.btnText}>{item['ads_' + this.props.language] || item.ads}</Text>
          </View>
        </TouchableOpacity>
      </>
    )
  }
}
