import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, View } from 'native-base'
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLOR, FAMILY, SIZE } from '../theme/typography'

const slides = [
  {
    key: 'one',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../assets/images/01.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../assets/images/02.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../assets/images/03.png'),
    backgroundColor: '#22bcb5',
  }
];

const Intro = () => {

    const [showRealApp, setShowRealApp] = useState(false);
  const _renderItem = ({ item }) => {
    return (
    <View style={styles.slide}>
      <View style={styles.slideTop}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.slideMiddle}>
        <Image source={item.image} style={styles.img} resizeMode='contain' />
      </View>
      <View style={styles.slideBottom}>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
    );
  }
  const _onDone = () => {
    setShowRealApp(true);
  }

  return(
    <>
        <AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone}/>
    </>
    )
}

const styles = StyleSheet.create({
    /* Search */
    slide: {
        flex: 1,
        backgroundColor: COLOR.primary,
    },
    slideTop: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    slideMiddle: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    slideBottom: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    title: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.large,
        color: COLOR.light,
        textAlign: 'center'
    },
    img: {
        width: 300,
        height: 300
    },
    text: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.compact,
        color: COLOR.light,
        textAlign: 'center'
    }
});

export default Intro;