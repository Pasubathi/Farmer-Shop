import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Icon, View, Badge } from 'native-base'

import { navigate } from '@utility/navigation'

import theme from '@theme/styles'

const Footer = () => {
    return (
      <View style={theme.footer}>
        <TouchableOpacity style={this.props.currentScreen === 'Home' ? theme.fBtnActive : theme.fBtn}
          onPress={() => {
           navigate('PublicHome')
          }}>
          <Icon name='home' type='FontAwesome' style={this.props.currentScreen === 'Home' ? theme.iconFtabActive : theme.fBtnIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={this.props.currentScreen === 'Search' ? theme.fBtnActive : theme.fBtn}
          onPress={() => {
           navigate('PublicAdsSearch')
          }}>
          <Icon name='search' type='FontAwesome' style={this.props.currentScreen === 'Search' ? theme.iconFtabActive : theme.fBtnIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={this.props.currentScreen === 'AdCreate' ? theme.fBtnActive : theme.fBtn}
          onPress={() => {
            navigate('MemberAdCreate')
          }}>
          <Icon name='plus' type='Foundation' style={this.props.currentScreen === 'MemberAdCreate' ? theme.iconFtabActive : theme.iconFtabBgActive} />
        </TouchableOpacity>
        <TouchableOpacity style={this.props.currentScreen === 'Bookmark' ? theme.fBtnActive : theme.fBtn}
          onPress={() => {
            navigate('MemberBookmark')
          }}>
          <Icon name='bookmark' type='Octicons' style={this.props.currentScreen === 'Favourites' ? theme.iconFtabActive : theme.fBtnIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={this.props.currentScreen === 'Messages' ? theme.fBtnActive : theme.fBtn}
          onPress={() => {
            navigate('MemberMessages')
          }}>
          <Icon name='bell' type='Entypo' style={this.props.currentScreen === 'Messages' ? theme.iconFtabActive : theme.fBtnIcon} />
        </TouchableOpacity>
      </View>
    )
}

export default Footer;
