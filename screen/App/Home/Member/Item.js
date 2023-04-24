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
        <View style={styles.memberPersonalLayout}>
          <View style={styles.memberPersonal}>
            <Image source={{ uri: item.image }} style={styles.memberPersonalImg} />
            <View style={styles.personalDetails}>
              <Text style={styles.personName}>{item.name}</Text>
              <Text style={styles.personDesc}>{item.hrs}</Text>
            </View>
            <Icon name='dots-horizontal' type="MaterialCommunityIcons" style={styles.commentIcon} />
          </View>
          <View style={styles.riderPlaceDetails}>
            <Text style={styles.riderPlace}>{item.place}</Text>
            <Text style={styles.riderDesc}>{item.placeText}</Text>
            <TouchableOpacity onPress={() => {
              NavigationService.navigate('PublicRideDetail')
            }}>
              <Image source={{ uri: item.placeImage }} style={styles.ridingImage} />
            </TouchableOpacity>
          </View>
        </View>
      </>
    )
  }
}
