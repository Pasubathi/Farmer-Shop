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
        <View style={styles.destinationDetails}>
          <TouchableOpacity style={styles.destinationImgDisplay} onPress={() => {
            NavigationService.navigate('PublicTripDetail')
          }}>
            <Image source={{ uri: item.image }} style={styles.destinationImg} />
            <View style={styles.packageLayout} />
            <View style={styles.iconLayout}>
              <Icon name={item.iconname} type={item.icontype} style={styles.favoriteIcon} />
            </View>
            <View style={styles.destinationPackageDetails}>
              <View style={styles.packageDescription}>
                <Text style={styles.destinationPackage}>{item.package}</Text>
                <Text style={styles.destinationPackage}>Tour Package</Text>
              </View>
              <View style={styles.destinationTagLayout} />
              <View style={styles.destinationTagCurveLayout} />
              <View style={styles.destinationSession}>
                <Text style={styles.destinationTiming}>{item.days}</Text>
                <Text style={styles.destinationTiming}>{item.nights}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.destinationFeatures}>
            <Text style={styles.destinationDesc}>starting From</Text>
            <View style={styles.destinationSplit}>
              <View style={styles.destinationRow}>
                <Text style={styles.destinationPrice}>{item.price}</Text>
                <Text style={styles.destinationAvailable}>/person</Text>
              </View>
              <View style={styles.destinationRow}>
                <Text style={styles.startingDesc}>{item.start}</Text>
                <Icon name='ios-arrow-round-forward' type='Ionicons' style={styles.arrowIcon} />
                <Text style={styles.reachingDesc}>{item.destination}</Text>
              </View>
            </View>
            <View style={styles.destinationAmenities}>
              <Image source={require('@asset/images/airplane.png')} style={styles.alignAmenity} />
              <Image source={require('@asset/images/cab.png')} style={styles.alignAmenity} />
              <Image source={require('@asset/images/bed.png')} style={styles.alignAmenity} />
              <Image source={require('@asset/images/food.png')} style={styles.alignAmenity} />
              <Image source={require('@asset/images/binoculars.png')} style={styles.alignAmenity} />
              <Text style={styles.alignAmenityDesc}>+4</Text>
            </View>
          </View>
        </View>
      </>
    )
  }
}
