import React, { Component } from 'react'
import { Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import { Text, Icon, View } from 'native-base'

import * as MENU from './Menu'

import styles from './styles'
import { closeDrawer, navigate } from '@utility/navigation'
import { __ } from '@utility/translation'
const MenuLeft = ({
    shadowOffsetWidth = 1,
    shadowRadius = 4
}) => {

  const renderMenuList = (menus) => {
    return menus.map((menu) => {
      return <TouchableOpacity
        style={styles.item} underlayColor='transparent' onPress={() => {
          closeDrawer()
          navigate(menu.route)
        }}
      >
        <View style={styles.col}>
          <Icon name={menu.iconName} type={menu.iconType} style={styles.itemIcon} />
        </View>
        <Text style={styles.itemText}>{__(menu.name)}</Text>
      </TouchableOpacity>
    })
  }


    return (
      <View style={styles.drawer}>
         <View style={styles.drawerProfile}>
          <ImageBackground source={require('@asset/images/bg_main.png')} style={styles.drawerImg}>
            <Image style={styles.drawerAvatar} source={require('@asset/images/avatar.png')} />
            <Text style={styles.drawerName}>{__('Russel Crowe')}</Text>
          </ImageBackground>
        </View>
        <View style={styles.content}>
          <ScrollView>
            {renderMenuList(MENU.Data1)}
            <Text style={styles.itemLabel}>{__('Member')}</Text>
            {renderMenuList(MENU.Data2)}
          </ScrollView>
        </View>
      </View>

    )
}

export default MenuLeft
