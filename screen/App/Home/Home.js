import React, { useEffect, useState } from 'react'
import { SafeAreaView, StatusBar, TouchableOpacity, TextInput, ScrollView, Image, ImageBackground, FlatList } from 'react-native'
import { Container, Content, Icon, Text, View } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'
import { SliderBox } from "react-native-image-slider-box"

import styles from './styles'
import Featured from './Featured'
import FeaturedAds from './FeaturedAds'
import Packages from './Packages'
import Destination from './Destination'
import Sponsored from './Sponsored'
import Member from './Member'
import Agent from './Agent'
import Header from '../../../component/Header'
import Footer from '../../../component/Footer'
import theme from '@theme/styles'
import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'
import request from '@utility/request'
import { bind } from '@utility/component'

import featuredList from './data/featured'
import featuredadsList from './data/featuredads'
import destinationList from './data/destination'
import packagesList from './data/packages'
import sponsoredList from './data/sponsored'
import memberList from './data/member'
import agentList from './data/agent'

const Home = () => {

    const [language, setLanguage] = useState('en');
    const [featuredList, setFeaturedList] = useState([]);
    const [fetchingFeaturedList, setFetchingFeaturedList] = useState(true);
    const [featuredadsList, setFeaturedadsList] = useState([]);
    const [fetchingFeaturedAdsList, setFetchingFeaturedAdsList] = useState(true);
    const [destinationList, setDestinationList] = useState([]);
    const [fetchingDestinationList, setFetchingDestinationList] = useState(true);
    const [fetchingPackagesList, setFetchingPackagesList] = useState(true);
    const [packagesList, setPackagesList] = useState([]);
    const [memberList, setMemberList] = useState([]);
    const [fetchingMemberList, setFetchingMemberList] = useState(true);
    const [sponsoredList, setSponsoredList] = useState([]);
    const [fetchingSponsoredList, setFetchingSponsoredList] = useState(true);
    const [agentList, setAgentList] = useState([]);
    const [fetchingAgentList, setFetchingAgentList] = useState(true);
    const [images, setImages] = useState([
        "https://cdn.trangcongnghe.com/uploads/posts/2017-07/can-canh-siecircu-xe-audi-r8-spyder-v10-plus-do-ruc-bang-xuong-bang-thit_1.jpg",
        "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://static.digit.in/default/6651fea04f52a58009bb82380dd8ee7df6e32652.jpeg",
        "https://4qr7k2a2xza2vctux33bisalkw-wpengine.netdna-ssl.com/wp-content/uploads/2015/07/Full-time-hiring-8.2015-07-700x699.png",
        "https://houseofhargrove.com/wp-content/uploads/2017/10/Beautiful-Exteriors1.jpg",
      ]);

  useEffect(async () => {
    const language = await AsyncStorage.getItem('language')
    setLanguage(language);
    fetchFeaturedList()
    fetchFeaturedAdsList()
    fetchDestinationList()
    fetchPackagesList()
    fetchSponsoredList()
    fetchMemberList()
    fetchAgentList()
  }, [])

  const fetchFeaturedList = async () => {
    setFetchingFeaturedList(true)
    const list = await request(featuredList)
    setFeaturedList(list)
    setFetchingFeaturedList(false);
  }

  const fetchFeaturedAdsList = async () => {
    setFetchingFeaturedAdsList(true)
    const list = await request(featuredadsList)
    setFeaturedadsList(list)
    setFetchingFeaturedAdsList(false)
  }

  const fetchPackagesList = async () => {
    setFetchingPackagesList(true)
    const list = await request(packagesList)
    setPackagesList(list);
    setFetchingPackagesList(false)
  }

  const fetchDestinationList = async () => {
    setFetchingDestinationList(true)
    const list = await request(destinationList)
    setDestinationList(list)
    setFetchingDestinationList(false)
  }

  const fetchSponsoredList = async () => {
    setFetchingSponsoredList(true);
    const list = await request(sponsoredList)
    setSponsoredList(list)
    setFetchingSponsoredList(false)
  }

  const fetchMemberList = async () => {
    setFetchingMemberList(true)
    const list = await request(memberList)
    setMemberList(list);
    setFetchingMemberList(false)
  }

  const fetchAgentList = async () => {
    setFetchingAgentList(true)
    const list = await request(agentList)
    setAgentList(list)
    setFetchingAgentList(false);
  }

    return (
      <Container style={theme.layoutFx}>
        <Header statusBarType='dark' navLeftType='menu' navMiddleType='medium' title={__('Home')} />
        <Content contentContainerStyle={theme.layout}>
          <ImageBackground source={require('@asset/images/bg_main.png')} resizeMode='cover' style={styles.bgImg}>
            <View style={styles.searchContainer}>
              <View style={styles.searchInputGroup}>
                <TextInput placeholder='e.g. Brixton, NW3 or NW3 5TY' style={styles.searchInput} />
                <TouchableOpacity style={theme.btnTransparent}>
                  <Icon name='search' type='Feather' style={[theme.large, theme.grey]} />
                </TouchableOpacity>
              </View>
            </View>
            <SliderBox images={images}
              sliderBoxHeight={300}
              dotColor="rgba(251, 84, 99, 1)"
              inactiveDotColor="#90A4AE" />

            <Featured
              language={language}
              list={featuredList}
              fetching={fetchingFeaturedList}
            />
          </ImageBackground>


          <FeaturedAds
            language={language}
            list={featuredadsList}
            fetching={fetchingFeaturedAdsList}
          />

          <Packages
            language={language}
            list={packagesList}
            fetching={fetchingPackagesList}
          />

          <Destination
            language={language}
            list={destinationList}
            fetching={fetchingDestinationList}
          />

          <View style={styles.sectionGrey}>
            <View style={styles.featuredAdsHeader}>
              <View style={styles.sponsoredCol}>
                <Icon name='map-marker-multiple' type='MaterialCommunityIcons' style={[theme.grey, theme.huge]} />
                <Text style={styles.sponsoredTitle}>{__('Ad Locations')}</Text>
              </View>
              <TouchableOpacity style={styles.btnMore} onPress={() => { navigate('PublicAds') }}>
                <Image source={require('@asset/images/dot.png')} />
              </TouchableOpacity>
            </View>

            <View style={styles.city}>
              <View style={styles.btnList}>
                <TouchableOpacity
                  style={styles.btnCityMain} onPress={() => {
                    navigate('PublicAds')
                  }}
                >
                  <Image source={{ uri: 'https://4.bp.blogspot.com/-B43r-cUpNYQ/VP3X7zvyLzI/AAAAAAAACsw/3SBFTZVWTuk/s1600/7428079.jpg' }} resizeMode='cover' style={styles.btnCityImg} />
                  <View style={styles.btnCityBgMain} />
                  <View style={styles.btnCityLocationMain}>
                    <Text style={styles.btnCityText}>{__('Los Angeles')}</Text>
                    <Text style={styles.btnCityCount}>158</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.btnList}>
                <TouchableOpacity
                  style={styles.btnCity} onPress={() => {
                    navigate('PublicAds')
                  }}
                >
                  <Image source={{ uri: 'https://i2-prod.birminghampost.co.uk/business/commercial-property/article13376659.ece/ALTERNATES/s615/Hotel-la-Tour-1.jpg' }} resizeMode='cover' style={styles.btnCityImg} />
                  <View style={styles.btnCityBg} />
                  <View style={styles.btnCityLocation}>
                    <Text style={styles.btnCityText}>{__('New York')}</Text>
                    <Text style={styles.btnCityCount}>1263</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btnCity} onPress={() => {
                    navigate('PublicAds')
                  }}
                >
                  <Image source={{ uri: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/05/things-to-do-in-san-francisco-cover-picture.jpg' }} resizeMode='cover' style={styles.btnCityImg} />
                  <View style={styles.btnCityBg} />
                  <View style={styles.btnCityLocation}>
                    <Text style={styles.btnCityText}>{__('San Francisco')}</Text>
                    <Text style={styles.btnCityCount}>98</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.city}>
              <View style={styles.btnList}>
                <TouchableOpacity
                  style={styles.btnCity} onPress={() => {
                    navigate('PublicAds')
                  }}
                >
                  <Image source={{ uri: 'https://d2t1047w253zzm.cloudfront.net/pm-cities/chicago-il-grant-park-apartments-for-rent.jpg' }} resizeMode='cover' style={styles.btnCityImg} />
                  <View style={styles.btnCityBg} />
                  <View style={styles.btnCityLocation}>
                    <Text style={styles.btnCityText}>{__('Chicago')}</Text>
                    <Text style={styles.btnCityCount}>2085</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btnCity} onPress={() => {
                    navigate('PublicAds')
                  }}
                >
                  <Image source={{ uri: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/f5/b9/e8/boston-freedom-trail.jpg' }} resizeMode='cover' style={styles.btnCityImg} />
                  <View style={styles.btnCityBg} />
                  <View style={styles.btnCityLocation}>
                    <Text style={styles.btnCityText}>{__('Boston')}</Text>
                    <Text style={styles.btnCityCount}>253</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.btnList}>
                <TouchableOpacity
                  style={styles.btnCityMain} onPress={() => {
                    navigate('PublicAds')
                  }}
                >
                  <Image source={{ uri: 'https://www.tripsavvy.com/thmb/RACn8CwaCqilw1nPIZbdkseVf_k=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/streetcar-in-new-orleans-699112771-5a98de0d1f4e130036d2e855.jpg' }} resizeMode='cover' style={styles.btnCityImg} />
                  <View style={styles.btnCityBgMain} />
                  <View style={styles.btnCityLocationMain}>
                    <Text style={styles.btnCityText}>{__('New Orleans')}</Text>
                    <Text style={styles.btnCityCount}>568</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Sponsored
            language={language}
            list={sponsoredList}
            fetching={fetchingSponsoredList}
          />

          <Member
            language={language}
            list={memberList}
            fetching={fetchingMemberList}
          />

          <Agent
            language={language}
            list={agentList}
            fetching={fetchingAgentList}
          />

        </Content>
        <Footer currentScreen='Home' />
      </Container>
    )
}

export default Home;
