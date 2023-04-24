import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require("react-native");
const { Platform } = React;

export default {
    /* Search */
    searchContainer: {

    },
    searchInputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLOR.light,
        marginHorizontal: 15,
        marginVertical: 15
    },
    searchInput: {
        flex: 1,
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        paddingHorizontal: 15
    },
    bgImg: {
        flex: 1
    },
    adContainer: {
        marginVertical: 30,
        marginLeft: 15,
        marginRight: 10
    },
    btnBox: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '33%',
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: COLOR.smokeDark,
        backgroundColor: COLOR.light,
    },
    btnImg: {
        marginBottom: 0,
    },
    btnText: {
        color: '#333',
        fontFamily: FAMILY.bold,
        fontSize: SIZE.small,
        textAlign: 'center'
    },

    /* Featured Properties  */
    featuredItem: {
        width: 300,
        backgroundColor: '#FFF',
        borderRadius: 5,
        elevation: 10,
        shadowOffset: {
            width: 15,
            height: 15
        },
        shadowColor: '#999',
        shadowOpacity: 0.1,
        shadowRadius: 0,
        marginTop: 10,
        marginRight: 5,
        marginLeft: 15,
        marginBottom: 30,
    },
    featuredImg: {
        marginBottom: 10,
        width: '100%',
        height: 150,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        ...Platform.select({
            ios: {
                borderRadius: 5,
            },
        }),
    },
    featuredCrv: {
        ...Platform.select({
            ios: {
                width: '100%',
                height: 5,
                backgroundColor: '#FFF',
                bottom: 10,
                position: 'absolute',
            },
        }),
    },
    featuredContent: {
        paddingHorizontal: 15,
        marginBottom: 15
    },
    featuredPrice: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.large,
        color: COLOR.greyDark
    },
    featuredLocation: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.grey
    },
    featuredContent2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginBottom: 20
    },
    featureCol: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    featureIcon: {
        fontSize: SIZE.huge,
        color: COLOR.grey
    },
    featureValue: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.medium,
        marginHorizontal: 10
    },
    /* Featured Ads */
    featuredAdContainer: {
        marginTop: 30
    },
    featuredAdsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    featuredAdsBg: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    featuredAds: {
        width: 200,
        marginBottom: 20,
        margin: 10,
        backgroundColor: '#FFF',
        borderRadius: 0,
        elevation: 10,
        shadowOffset: {
            width: 15,
            height: 15
        },
        shadowColor: "#CCC",
        shadowOpacity: 0.1,
        shadowRadius: 0,
        ...Platform.select({
            ios: {
                shadowOffset: {
                    width: 5,
                    height: 5
                },
            },
        })
    },
    featuredAdsImg: {
        marginBottom: 10,
        width: 200,
        height: 100,
        ...Platform.select({
            ios: {
                borderRadius: 0,
            },
        }),
    },
    iconLayout: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginBottom: 5
    },
    ratingIcon: {
        fontSize: SIZE.medium,
        color: 'rgba(247, 198, 0, 1)',
        marginRight: 3
    },
    reviewText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.tiny,
        color: COLOR.grey,
        marginLeft: 10
    },
    featuredAdsFavorite: {
        position: 'absolute',
        alignSelf: 'flex-end',
        color: COLOR.default,
        paddingRight: 10,
        fontSize: 24,
    },
    featuredAdsTitle: {
        fontSize: SIZE.small,
        fontFamily: FAMILY.bold,
        color: COLOR.dark,
        fontSize: SIZE.small,
        paddingHorizontal: 20,
    },
    featuredAdsPrice: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.small,
        color: COLOR.dark,
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    featuredAdsLocation: {
        fontFamily: FAMILY.regular,
        fontSize: 11,
        color: COLOR.greyPastel,
        marginBottom: 5,
        paddingHorizontal: 20,
    },
    featuredAdsIcon: {
        color: COLOR.greyPastel,
        marginRight: 5,
        fontSize: 14,
    },
    featuredAdsDate: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.tiny,
        color: COLOR.greyPastel,
        marginRight: 20,
    },
    featuredAdsPosted: {
        flexDirection: 'row',
        paddingBottom: 10,
        paddingHorizontal: 20,
    },
    bookBtn: {
        backgroundColor: COLOR.default,
        padding: 10
    },
    bookBtnText: {
        textAlign: 'center',
        fontFamily: FAMILY.bold,
        fontSize: SIZE.tiny,
        color: COLOR.light
    },
    /** -Destinations - **/
    destinationAds: {
        marginTop: 15,
        marginLeft: 5,
        marginRight: 15,
        marginBottom: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
        elevation: 10,
        shadowOffset: {
            width: 15,
            height: 15
        },
        shadowColor: '#333',
        shadowOpacity: 0.1,
        shadowRadius: 0
    },
    destinationImgDisplay: {
    },
    destinationAdImg: {
        alignSelf: 'center',
        width: 140,
        height: 155,
        borderRadius: 10
    },
    destinationFeatures: {
        paddingVertical: 15,
        paddingHorizontal: 10
    },
    destinationDesc: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.small,
        color: 'rgba(0,0,0,0.9)',
        marginBottom: 5
    },
    destinationRow: {
        flexDirection: 'row'
    },
    destinationStarting: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: 'rgba(0,0,0,0.5)'
    },
    destinationPrice: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.small,
        color: 'rgba(17, 183, 25, 1)',
        marginLeft: 8
    },
    /* Top Destinations */
    sectionGrey: {
        backgroundColor: COLOR.smoke,
        paddingVertical: 20,
        marginTop: 10
    },
    city: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    btnList: {
        width: '48%',
    },
    btnCity: {
        width: '100%',
        height: 100,
        marginBottom: 10,
    },
    btnCityMain: {
        width: '100%',
        height: 210,
        marginBottom: 10,
    },
    btnCityImg: {
        flex: 1,
        borderRadius: 0,
    },
    btnCityLocation: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnCityLocationMain: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: 210,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnCityBg: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: 100,
        backgroundColor: '#39405B',
        opacity: 0.5,
    },
    btnCityBgMain: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: 210,
        backgroundColor: '#39405B',
        opacity: 0.5,
    },
    btnCityText: {
        color: '#FFF',
        fontFamily: FAMILY.bold,
        fontSize: SIZE.small,
    },
    btnCityCount: {
        color: '#FFF',
        fontFamily: FAMILY.bold,
        fontSize: 24,
    },
    /* Sponsored Properties */
    sponsoredContainer: {
        paddingVertical: 20,
    },
    sponsoredHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        paddingHorizontal: 15
    },
    sponsoredCol: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    sponsoredTitle: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.small,
        marginHorizontal: 10,
        textTransform: 'uppercase'
    },
    /* Package */
    destinationDetails: {
        flex: 1,
        marginTop: 15,
        marginLeft: 5,
        marginRight: 15,
        marginBottom: 15,
        backgroundColor: '#FFF',
        borderRadius: 10,
        elevation: 10,
        shadowOffset: {
            width: 15,
            height: 15
        },
        shadowColor: '#333',
        shadowOpacity: 0.1,
        shadowRadius: 0
    },
    destinationImgDisplay: {

    },
    destinationImg: {
        alignSelf: 'center',
        width: 300,
        height: 160,
        borderRadius: 10
    },
    packageLayout: {
        position: 'absolute',
        backgroundColor: '#000',
        opacity: 0.4,
        width: '100%',
        height: 160,
        borderRadius: 10
    },
    packageDescription: {
        alignSelf: 'center'
    },
    iconLayout: {
        position: 'absolute',
        width: '100%',
        top: 0,
        alignItems: 'flex-end',
        padding: 10
    },
    favoriteIcon: {
        fontSize: 24,
        color: '#FFF'
    },
    destinationPackageDetails: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0,
        paddingBottom: 10,
        paddingLeft: 10
    },
    destinationPackage: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.light
    },
    destinationTagLayout: {
        width: 10,
        height: 10,
        position: 'absolute',
        transform: [{ rotate: '90deg' }],
        backgroundColor: 'rgba(9, 110, 14, 1)',
        right: -10,
        top: -10
    },
    destinationTagCurveLayout: {
        backgroundColor: '#FFF',
        height: 15,
        width: 18,
        top: -17,
        position: 'absolute',
        transform: [{ rotate: '46deg' }],
        right: -20
    },
    destinationSession: {
        backgroundColor: 'rgba(17, 183, 25, 1)',
        right: -10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    destinationTiming: {
        fontFamily: FAMILY.regular,
        fontSize: 10,
        color: COLOR.light
    },
    destinationFeatures: {
        marginHorizontal: 15,
        marginVertical: 15
    },
    destinationDesc: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: 'rgba(17, 183, 25, 1)'
    },
    destinationStarting: {
        fontFamily: FAMILY.regular,
        fontSize: 10,
        color: 'rgba(0,0,0,0.9)'
    },
    destinationRow: {
        alignSelf: 'center',
        flexDirection: 'row'
    },
    destinationSplit: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 5
    },
    destinationPrice: {
        fontFamily: FAMILY.regular,
        fontSize: 14,
        color: 'rgba(0,0,0,0.9)'
    },
    destinationAvailable: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: 'rgba(0,0,0,0.3)',
        marginLeft: 5
    },
    destinationFacility: {
        alignSelf: 'center',
        fontFamily: FAMILY.regular,
        fontSize: 10,
        color: COLOR.light
    },
    startingDesc: {
        alignSelf: 'center',
        fontFamily: FAMILY.regular,
        fontSize: 10,
        color: 'rgba(0,0,0,0.9)'
    },
    arrowIcon: {
        fontSize: 24,
        color: 'rgba(0,0,0,0.9)',
        marginHorizontal: 5
    },
    reachingDesc: {
        alignSelf: 'center',
        fontFamily: FAMILY.regular,
        fontSize: 10,
        color: 'rgba(0,0,0,0.9)'
    },
    destinationAmenities: {
        flexDirection: 'row',
        paddingTop: 10,
        borderColor: 'rgba(0,0,0,0.03)',
        borderTopWidth: 1
    },
    alignAmenity: {
        marginRight: 10,
        width: 18,
        height: 18
    },
    alignAmenityDesc: {
        alignSelf: 'center',
        fontFamily: FAMILY.regular,
        fontSize: 14,
        color: 'rgba(0,0,0,0.9)'
    },
    /* Member */
    memberPersonalLayout: {
        paddingHorizontal: 15,
        marginVertical: 20,
        marginRight: 10,
        borderRadius: 10,
        paddingVertical: 10,
        elevation: 5,
        shadowOffset: {
            width: 15,
            height: 15
        },
        shadowColor: 'rgb(48, 53, 65)',
        shadowOpacity: 0.1,
        shadowRadius: 0,
        backgroundColor: '#222'
    },
    memberPersonal: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#222',
        paddingTop: 10
    },
    memberPersonalImg: {
        width: 56,
        height: 56,
        borderRadius: 28
    },
    personalDetails: {
        flex: 7,
        marginHorizontal: 10
    },
    personName: {
        fontFamily: FAMILY.bold,
        fontSize: 12,
        color: COLOR.light
    },
    personDesc: {
        fontFamily: FAMILY.regular,
        fontSize: 10,
        color: 'rgba(255,255,255,0.3)'
    },
    commentIcon: {
        fontSize: 24,
        color: 'rgba(255,255,255,0.3)'
    },
    riderPlaceDetails: {
        paddingVertical: 10
    },
    riderPlace: {
        fontFamily: FAMILY.regular,
        fontSize: 12,
        color: 'rgb(246, 103, 99)',
        marginBottom: 5
    },
    riderDesc: {
        fontFamily: FAMILY.regular,
        fontSize: 10,
        lineHeight: 14,
        color: 'rgba(255,255,255,0.7)',
        marginBottom: 10
    },
    ridingImage: {
        width: '100%',
        height: 150,
        borderRadius: 10
    },
    /* Agents */
    agentContainer: {
        paddingTop: 20,
        paddingBottom: 30,
        marginTop: 15,
        backgroundColor: COLOR.smoke
    },
    agentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingHorizontal: 15
    },
    agentCol: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    agentTitle: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.small,
        marginHorizontal: 10,
        textTransform: 'uppercase'
    },
    agentItem: {
        width: 72,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    agentImg: {
        width: 72,
        height: 72,
        marginBottom: 10
    },
    agentContent: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    agentName: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.small,
        color: COLOR.greyDark,
        textAlign: 'center'
    },
    /* Common Styles */
    btnMore: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5
    },
    btnMoreText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.tiny,
        color: COLOR.greyDark,
        textTransform: 'uppercase'
    },




}