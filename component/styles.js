import { COLOR, FAMILY, SIZE } from '@theme/typography'

export default {

  /* Drawer drawerigation */
  drawer: {
    flex: 1,
    height: 200
  },

  /* Header */
  drawerImg: {
   height: 200,
  
   justifyContent:'center',
   paddingLeft: 30
  },
  drawer: {
    flex: 1,
    width: '100%'
  },
  drawerProfile: {
  
  },
  drawerAvatar: {
    width: 64,
    height: 64
  },
  drawerName: {
    fontFamily: FAMILY.bold,
    fontSize: 14,
    color: '#FFF',
    marginTop: 10
  },

  /* Content */
  content: {
    flex: 1,
    paddingVertical: 30
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 5
  },
  col: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemText: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 20,
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small
  },
  itemIcon: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.large
  },
  itemLabel: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    marginHorizontal: 30,
    marginVertical: 15
  }

}
