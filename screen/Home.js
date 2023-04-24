import React, { useEffect, useState} from 'react'
import { StatusBar, TouchableOpacity, TextInput, Image, ImageBackground, FlatList, Platform, StyleSheet } from 'react-native'
import { Container, Content, Icon, Text, View, ScrollView } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import { navigate } from '@utility/navigation'
import theme from '@theme/styles'
import { __ } from '@utility/translation'
import Header from '../component/Header'
import Footer from '../component/Footer'
import request from '@utility/request'

import Message from './Message'
import messageList from './data/messages'

import { COLOR, FAMILY, SIZE } from '@theme/typography'

const Home = () => {

    const [language, setLanguage] = useState('en');
    const [fetchingFeaturedList, setFetchingFeaturedList] = useState(true);
    const [messageList, setMessageList] = useState([]);
  
    useEffect( async () => {
        const language = await AsyncStorage.getItem('language')
        setLanguage(language)
        await fetchingMessageList()
     }, [] )

  const fetchingMessageList = async () => {
        await setFetchingFeaturedList(true)
        const list = await request(messageList)
        setFetchingFeaturedList(false)
        setMessageList(list);
    }

    return (
      <Container style={theme.layoutFx}>
        <Header navLeftType='menu' statusBarType='dark' navMiddleType='medium' />
        <Content >

          <View style={styles.memberContainer}>
            <ImageBackground source={require('@asset/images/bg_in.png')} imageStyle='cover' style={styles.curveImg} >
              <View style={styles.profile}>
                <Image source={require('@asset/images/avatar.png')} style={styles.avatar} />
                <View>
                  <Text style={styles.profileName}>{__('Hey Russell Crowe!')}</Text>
                  <Text style={styles.profileLocation}>{__('New York, United States')}</Text>
                </View>
              </View>
              <View style={styles.btnLayout}>
                <TouchableOpacity
                  style={styles.btnBox} onPress={() => {
                    navigate('MemberAds')
                  }}
                >
                  <Image source={require('@asset/images/btn-ads.png')} style={styles.btnImg} />
                  <Text style={styles.btnText}>{__('My Ads')}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btnBox} onPress={() => {
                    navigate('MemberMessages')
                  }}
                >
                  <Image source={require('@asset/images/btn-message.png')} resizeMode='cover' style={styles.btnImg} />
                  <Text style={styles.btnText}>{__('Messages')}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.btnBox} onPress={() => {
                    navigate('MemberProfile')
                  }}
                >
                  <Image source={require('@asset/images/btn-jobs.png')} style={styles.btnImg} />
                  <Text style={styles.btnText}>{__('Profile')}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.btnBox} onPress={() => {
                    navigate('MemberBookmark')
                  }}
                >
                  <Image source={require('@asset/images/btn-bookmark.png')} style={styles.btnImg} />
                  <Text style={styles.btnText}>{__('Bookmark')}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.btnBox} onPress={() => {
                    navigate('MemberSettings')
                  }}
                >
                  <Image source={require('@asset/images/btn-services.png')} style={styles.btnImg} />
                  <Text style={styles.btnText}>{__('Settings')}</Text>
                </TouchableOpacity>



                <TouchableOpacity style={styles.btnBox} />
              </View>
            </ImageBackground>
            <Message
              language={language}
              list={messageList}
              fetching={fetchingMessageList}
            />
          </View>
        </Content>
        <Footer currentScreen='Home' />
      </Container>
    )
}

const styles = StyleSheet.create({
    memberContainer: {
        flex: 1,
        width: '100%',
    },
    profile: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: 'row',
        paddingTop: 20
    },
    avatar: {
        marginRight: SIZE.tiny
    },
    profileName: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.compact,
        color: '#FFF',
        marginBottom: 3,
        marginTop: 15
    },
    profileLocation: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: '#FFF',
        opacity: 0.7
    },
    curveImg: {
        flex: 1
    },
    btnLayout: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginHorizontal: 20,
        marginVertical: 30,
        backgroundColor: '#FFF',
        borderRadius: 0,
        elevation: 10,
        shadowOffset: {
            width: 15,
            height: 15
        },
        shadowColor: '#999',
        shadowOpacity: 0.1,
        shadowRadius: 0,
        ...Platform.select({
            ios: {
                shadowOffset: {
                    width: 5,
                    height: 5
                },
            },
        }),
    },
    btnBox: {
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: '33%',
        marginBottom: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderColor: COLOR.smoke,
    },
    btnImg: {
        marginBottom: SIZE.tiny
    },
    btnText: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.small,
        color: '#333',
        textAlign: 'center'
    },
    /* Messages */
    messageContainer: {
        width: '100%'
    },
    messageHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 10,
        paddingHorizontal: 20
    },
    messageCol: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    messageTitle: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.medium,
        color: COLOR.primary,
        textTransform: 'uppercase',
        marginLeft: 10
    },
    message: {
        flex: 1,
        paddingVertical: 30,
        alignItems: 'center',
        width: '100%'
    },
    messageDetail: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#DDD',
        marginLeft: 0,
        paddingVertical: SIZE.tiny,
        paddingHorizontal: 15,
        backgroundColor: '#FFF'
    },
    memberImg: {
        width: 48,
        height: 48,
        borderRadius: 50
    },
    messageInfo: {
        flex: 1,
        paddingHorizontal: 15
    },
    messangerName: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.small,
        color: '#333',
        marginBottom: 0
    },
    messangerText: {
        fontFamily: FAMILY.regular,
        fontSize: 11,
        color: '#666',
        marginBottom: 5,
        lineHeight: 16
    },
    postedDate: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.tiny,
        color: '#999'
    },
    /* Common Styles */
    btnMore: {
        paddingHorizontal: 15,
        paddingVertical: SIZE.tiny,
        borderRadius: 5
    },
    btnMoreText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.tiny,
        color: COLOR.greyDark,
        textTransform: 'uppercase'
    },
});

export default Home;
