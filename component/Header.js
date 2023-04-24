import React from 'react'
import PropTypes from 'prop-types'
import { StatusBar, View, TouchableOpacity } from 'react-native'
import { Header as HeaderNB, Icon, Text } from 'native-base'
import { navigate } from '@utility/navigation'

import theme from '@theme/styles'
import { openDrawer, back } from '@utility/navigation'

const  Header = ({
    theme = 'light',
    showStatusBar = true,
    statusBarType = 'light',
    navStyle = theme.nav,
    showNavLeft = true,
    navLeftStyle = theme.navLeft,
    navLeftType = 'back',
    navLeftContent = null,
  
    showNavMiddle = true,
    navMiddleStyle = theme.navMiddle,
    navMiddleType = 'small',
    title = '',
    navMiddleContent = null,
    navTextColor = null,
    navTextWeight = theme.bold,
  
    showNavRight = true,
    navRightStyle = theme.navRight,
    navRightContent = null
  }) => {
 
  const renderStatusBar = () => {
    if (showStatusBar) {
      if (statusBarType === 'light') {
        return <StatusBar backgroundColor='rgba(255, 255, 255, 1)' barStyle='dark-content' />
      } else if (statusBarType === 'dark') {
        return <StatusBar backgroundColor='rgba(56, 64, 90, 1)' barStyle='light-content' />
      }
    }

    return null
  }

  const renderNavLeft = () => {
    if (!showNavLeft) {
      return null
    }

    let icon
    if (navLeftContent) {
      icon = navLeftContent
    } else if (navLeftType === 'back') {
      icon = <TouchableOpacity style={theme.btnTransparent} onPress={back}>
        <Icon name='arrow-left' type='MaterialCommunityIcons' style={theme.light} />
      </TouchableOpacity>
    } else if (navLeftType === 'menu') {
      icon = <TouchableOpacity style={theme.btnTransparent} onPress={openDrawer}>
        <Icon name='sort' type='MaterialIcons' style={theme.light} />
      </TouchableOpacity>
    }

    return (
      <View style={navLeftStyle}>
        {icon}
      </View>
    )
  }

  const renderNavMiddle = () => {
    if (showNavMiddle) {
      return null
    }

    const titleStyle = []
    if (navMiddleType === 'tiny') {
      titleStyle.push(theme.tiny)
    } else if (navMiddleType === 'small') {
      titleStyle.push(theme.small)
    } else if (navMiddleType === 'medium') {
      titleStyle.push(theme.medium)
    } else if (navMiddleType === 'large') {
      titleStyle.push(theme.large)
    } else if (navMiddleType === 'huge') {
      titleStyle.push(theme.huge)
    }

    if (theme === 'light') {
      titleStyle.push(theme.light)
    } else if (theme === 'dark') {
      titleStyle.push(theme.dark)
    }

    if (navTextColor) {
      titleStyle.push({
        color: navTextColor
      })
    }

    if (navTextWeight) {
      titleStyle.push({
        weight: navTextWeight
      })
    }

    return (
      <View style={navMiddleStyle}>
        {
          navMiddleContent
            ? navMiddleContent
            : <Text style={titleStyle}>{title}</Text>
        }
      </View>
    )
  }

  const renderNavRight = () => {
    if (!showNavRight) {
      return null
    }

    let icon
    if (navRightContent) {
      icon = navRightContent
    } else if (navRightType === 'search') {
      icon = <TouchableOpacity onPress={() => { navigate('PublicAdsSearch') }}>
        <Icon name='search' type='FontAwesome' style={theme.navRightIcon} />
      </TouchableOpacity>
    } else if (navRightType === 'menu') {
      icon = <TouchableOpacity onPress={() => { navigate('MemberAdCreate') }}>
        <Icon name='plus' type='FontAwesome' style={theme.navRightIcon} />
      </TouchableOpacity>
    }
    else if (navRightType === 'share') {
      icon = <TouchableOpacity onPress={this.onShare}>
        <Icon name='ios-share-alt' type='Ionicons' style={theme.navRightIcon} />
      </TouchableOpacity>
    }

    return (
      <View style={navRightStyle}>
        {icon}
      </View>
    )
  }


    let headerStyle
    if (theme === 'light') {
      headerStyle = theme.headerLight
    } else if (theme === 'dark') {
      headerStyle = theme.headerDark
    } else {
      headerStyle = theme.headerTransparent
    }

    return (
      <HeaderNB style={headerStyle}>
        {renderStatusBar()}
        <View style={navStyle}>
          {renderNavLeft()}

          {renderNavMiddle()}

          {renderNavRight()}
        </View>
      </HeaderNB>
    )
}

export default Header
