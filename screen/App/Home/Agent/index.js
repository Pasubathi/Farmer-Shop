import React from 'react'
import { FlatList, TouchableOpacity, Image } from 'react-native'
import { View, Icon, Text } from 'native-base'

import styles from '../styles'
import Item from './Item'
import Placeholder from './Placeholder'

import theme from '@theme/styles'
import { __ } from '@utility/translation'
import { navigate } from '@utility/navigation'

export default class extends React.Component {
  constructor (props) {
    super(props)

    this.renderTemplate = this.renderTemplate.bind(this)
    this.renderItem = this.renderItem.bind(this)
  }

  renderTemplate () {
    return <Placeholder />
  }

  renderItem ({ item }) {
    return (
      <Item
        language={this.props.language}
        item={item}
      />
    )
  }

  render () {
    return (
      <>
        <View style={styles.agentContainer}>
          <View style={styles.agentHeader}>
            <View style={styles.agentCol}>
              <Icon name='group' type='FontAwesome' style={[theme.grey, theme.huge]} />
              <Text style={styles.agentTitle}>{__('Agent')}</Text>
            </View>
            <TouchableOpacity style={styles.btnMore} onPress={() => { navigate('PublicMembers') }}>
            <Image source={require('@asset/images/dot.png')} />
          </TouchableOpacity>
          </View>
          <View style={styles.agentContent}>
            <FlatList
              data={this.props.fetching ? [1, 2, 3, 4] : this.props.list}
              horizontal
              contentContainerStyle={{ paddingHorizontal: 10 }}
              showsHorizontalScrollIndicator={false}
              renderItem={this.props.fetching ? this.renderTemplate : this.renderItem}
            />
          </View>
        </View>
      </>
    )
  }
}
