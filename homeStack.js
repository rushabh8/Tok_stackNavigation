import React, { Component } from 'react';
import { Platform, Image, ImageBackground, View, Dimensions, Text, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from '../screens/home'
import Setting from '../screens/setting'
import EditProfile from '../screens/editProfile'
import SelectAvatarEditProfile from '../screens/selectAvatarEditProfile'
import ResetPassword from '../screens/resetPassword'
import Versus from '../screens/versus_New'
import SelectRandomFrnd from '../screens/selectRandomFrnd'
import QuestionTop10Solo from '../screens/questionTop10Solo'
import QuestionTop10Dual from '../screens/questionTop10DualDemo'
import QuestionSmartSortSolo from '../screens/questionSmartSortSolo'
import QuestionSmartSortDual from '../screens/questionSmartSortDual'
import GameComplete from '../screens/gameComplete'
import GameCompleteSmartSort from '../screens/gameCompleteSmartSort'
import Result from '../screens/result'
import LeaderBoard from '../screens/leaderBoard'
import LeaderBoardHome from '../screens/leaderBoardHome'
import BlockedUser from '../screens/blockedUser'
import SearchPlayerTopic from '../screens/searchPlayerTopic'
import AboutUs from '../screens/aboutus'
import Privacy from '../screens/privacy'
import ForgotPassword from '../screens/forgotPassword'
import SelectGame from '../screens/selectGame'
import SelectTopics from '../screens/selectTopics'
import SelectMode from '../screens/selectMode'
import SearchHistory from '../screens/searchHistory'
import SelectTypeSolo from '../screens/selectTypeSolo'
import SelectTypeDuel from '../screens/selectTypeDuel'
import MyTopics from '../screens/myTopics'
import TermsAndCondition from '../screens/termsAndCondition'
import Tutorial from '../screens/tutorialScreen'
import GameStart from '../screens/gameStart'
import styles from '../components/styles/styles'
import InviteFriend from '../screens/inviteFriend'
import FriendList from '../screens/friendList'
import GroupInfo from '../screens/groupInfo'
import friendListClub from '../screens/friendListClub'
import LoaderDual from '../screens/loaderDual'
import { scaleWidth, scaleHeight, normalizeFont } from '../components/common/Responsive';
import { MusicFunc } from '../components/common/SoundFunc';

const buttonClickMusic = require('../sound/Button_click.wav');
const { width, height } = Dimensions.get('window');
const HeaderLeft = ({ navigation, props }) => (
    <TouchableOpacity onPress={() => { navigation.navigate('Setting'), MusicFunc('Button_Click_Music') }}
        style={{ flex: 2, justifyContent: 'flex-start', paddingTop: scaleHeight(10) }}>
        <Image source={require('../image/home/setting.png')} style={{ tintColor: 'white' }} />
    </TouchableOpacity>
);
const HeaderRight = ({ navigation, props }) => (
    <TouchableOpacity onPress={() => { alert('We are working on this!!'), MusicFunc('Button_Click_Music') }}
        style={{ flex: 2, justifyContent: 'flex-end', paddingBottom: scaleHeight(10), alignItems: 'flex-end' }}>
        <Image source={require('../image/home/chat.png')} style={{ tintColor: 'white' }} />
    </TouchableOpacity>
);
const HeaderBack = ({ navigation, props }) => (
    <TouchableOpacity onPress={() => { navigation.goBack(null), MusicFunc('Button_Click_Music') }}
        style={{ flex: 0.5, justifyContent: 'flex-start', paddingTop: scaleHeight(10) }}>
        <Image source={require('../image/BackIcon/back-icon.png')} style={{ tintColor: 'white' }} />
    </TouchableOpacity>
);
const HeaderBackLeaderBoard = ({ navigation, props }) => (
    <TouchableOpacity onPress={() => { navigation.navigate('SelectMode'), MusicFunc('Button_Click_Music') }}
        style={{ flex: 0.5, justifyContent: 'flex-start', paddingTop: scaleHeight(10) }}>
        <Image source={require('../image/BackIcon/back-icon.png')} style={{ tintColor: 'white' }} />
    </TouchableOpacity>
);
const Header = props => (
    <View style={{ flex: 1, justifyContent: 'flex-start', paddingTop: Platform.OS == 'ios' ? scaleHeight(10) : scaleHeight(6) }}>
        <Text style={{ color: 'white', fontSize: normalizeFont(23) }}>{props.title}</Text>
    </View>
);

const HeaderBackFriendListClub = ({ navigation, props }) => (
    <TouchableOpacity onPress={() => { navigation.goBack(null), MusicFunc('Button_Click_Music') }}
        style={{ flex: 0.8, justifyContent: 'flex-start', paddingTop: scaleHeight(10) }}>
        <Image source={require('../image/BackIcon/back-icon.png')} style={{ tintColor: 'white' }} />
    </TouchableOpacity>
);

const Footer = ({ navigation, props }) => (
    <View style={{ backgroundColor: 'white' }}>
        <View style={[styles.homeSearchView, { marginVertical: 10 }]}>

            <TextInput allowFontScaling={false}
                maxLength={100}
                placeholderTextColor="white"
                onEndEditing={() => navigation.navigate('SearchPlayerTopic')}
                underlineColorAndroid="transparent"
                style={styles.homeSearchText}
                placeholder="Search Player/Topic"
            />
            <TouchableOpacity style={{ flex: 0.3 }} onPress={() => alert('Please enter text.')}>
                <Image source={require('../image/create/search.png')} style={{ marginRight: 25 }} />
            </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: '#D00E17', width: width, height: 1, marginTop: 8 }}></View>
    </View>
);

const ImageHeader = props => {
    ////console.log('ImageHeader props', props);
    return (
        <ImageBackground
            style={{ width, height: 45, position: 'absolute', top: 0, left: 0 }}
            source={require("../image/Reset_Password/header.png")}
            resizeMode="cover"
        >
            <View style={{ height: 45, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
                <Header {...props} style={{ backgroundColor: 'transparent' }} />
            </View>

        </ImageBackground>


    );
}

const ImageHeaderWithBack = props => {
    ////console.log('ImageHeader props', props);
    return (
        <ImageBackground
            style={{ width, height: 45, position: 'absolute', top: 0, left: 0 }}
            source={require("../image/Reset_Password/header.png")}
            resizeMode="cover"
        >
            <View style={{ paddingLeft: 10, flexDirection: 'row', height: 45, backgroundColor: 'transparent' }}>
                <HeaderBack {...props} style={{ backgroundColor: 'transparent' }} />
                <Header {...props} style={{ backgroundColor: 'transparent' }} />
            </View>

        </ImageBackground>


    );
}


const HeaderForTermsAndCondition = props => (
    <View style={{ flex: 1.5, justifyContent: 'flex-start', top: Platform.OS == 'ios' ? scaleHeight(10) : scaleHeight(6) }}>
        <Text style={{ color: 'white', fontSize: normalizeFont(23) }}>{props.title}</Text>
    </View>
);
const ImageHeaderForTermsAndCondition = props => {
    ////console.log('ImageHeader props', props);
    return (
        <ImageBackground
            style={{ width, height: 45, position: 'absolute', top: 0, left: 0 }}
            source={require("../image/Reset_Password/header.png")}
            resizeMode="cover"
        >
            <View style={{ paddingLeft: 10, flexDirection: 'row', height: 45, backgroundColor: 'transparent' }}>
                <HeaderBack {...props} style={{ backgroundColor: 'transparent' }} />
                <HeaderForTermsAndCondition {...props} style={{ backgroundColor: 'transparent' }} />
            </View>

        </ImageBackground>


    );
}

const FooterAvatar = ({ navigation, props }) => (
    <View style={{ backgroundColor: 'white' }}>
        <View style={styles.avatarSearchView}>
            <Text style={{ fontSize: normalizeFont(22), fontWeight: '900', left: 30, opacity: 0.9 }}>Select Avatar</Text>
            <TouchableOpacity onPress={() => navigation.goBack(null)} style={{ right: 5 }}>
                <Image source={require('../image/select_topic/done.png')} />
            </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: '#D2D2D2', width: width, height: 1, marginTop: 8 }}></View>
    </View>
);

const ImageHeaderAvatar = props => {
    ////console.log('ImageHeader props', props);
    return (
        <ImageBackground
            style={{ width, height: 45, position: 'absolute', top: 0, left: 0 }}
            source={require("../image/Reset_Password/header.png")}
            resizeMode="cover"
        >
            <View style={{ height: 45, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
                <Header {...props} style={{ backgroundColor: 'transparent' }} />
            </View>
            <FooterAvatar {...props} style={{ backgroundColor: 'transparent' }} />
        </ImageBackground>
    );
}
const FooterSelectTopic = ({ navigation, props }) => (
    <View style={{ backgroundColor: 'white' }}>
        <View style={styles.avatarSearchView}>
            <TextInput allowFontScaling={false}
                maxLength={100}
                placeholderTextColor="white"
                onEndEditing={() => navigation.navigate('SearchHistory')}
                underlineColorAndroid="transparent"
                style={[styles.homeSearchText, { borderRadius: 10, paddingLeft: 20, top: 5 }]}
                placeholder="Search Topics"
            />
            <TouchableOpacity style={{ right: 5, alignSelf: 'center', top: 5 }}>
                <Image source={require('../image/select_topic/done.png')} />
            </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: '#D2D2D2', width: width, height: 1, marginTop: 8 }}></View>
    </View>
);

const ImageHeaderSelectTopic = props => {
    ////console.log('ImageHeader props', props);
    return (
        <ImageBackground
            style={{ width, height: 45, position: 'absolute', top: 0, left: 0 }}
            source={require("../image/Reset_Password/header.png")}
            resizeMode="cover"
        >
            <View style={{ paddingLeft: 10, flexDirection: 'row', height: 45, backgroundColor: 'transparent' }}>
                <HeaderBack {...props} style={{ backgroundColor: 'transparent' }} />
                <Header {...props} style={{ backgroundColor: 'transparent' }} />
            </View>
            <FooterSelectTopic {...props} style={{ backgroundColor: 'transparent' }} />
        </ImageBackground>
    );
}
const HeaderBackDualClub = ({ navigation, props }) => (
    <TouchableOpacity onPress={() => navigation.navigate('InviteFriend')}
        style={{ justifyContent: 'flex-end', alignItems: 'flex-end', paddingBottom: scaleHeight(8), paddingRight: scaleWidth(8) }}>
        <Image source={require('../images/chat/ad.png')} style={{ height: 27, width: 27 }} resizeMode='stretch' />
    </TouchableOpacity>
);

const ImageHeaderWithDualClub = props => {
    ////console.log('ImageHeader props', props);
    return (
        <ImageBackground
            style={{ width, height: 45, position: 'absolute', top: 0, left: 0 }}
            source={require("../image/Reset_Password/header.png")}
            resizeMode="cover"
        >
            <View style={{ paddingLeft: 10, flexDirection: 'row', height: 45, backgroundColor: 'transparent' }}>
                <HeaderBack {...props} style={{ backgroundColor: 'transparent' }} />
                <Header {...props} style={{ backgroundColor: 'transparent' }} />
                <HeaderBackDualClub {...props} style={{ backgroundColor: 'transparent' }} />
            </View>
        </ImageBackground>


    );
}
const ImageHeaderWithFriendListClub = props => {
    ////console.log('ImageHeader props', props);
    return (
        <ImageBackground
            style={{ width, height: 45, position: 'absolute', top: 0, left: 0 }}
            source={require("../image/Reset_Password/header.png")}
            resizeMode="cover"
        >
            <View style={{ paddingLeft: 10, flexDirection: 'row', height: 45, backgroundColor: 'transparent' }}>
                <HeaderBackFriendListClub {...props} style={{ backgroundColor: 'transparent' }} />
                <Header {...props} style={{ backgroundColor: 'transparent' }} />
                <HeaderBackDualClub {...props} style={{ backgroundColor: 'transparent' }} />
            </View>
        </ImageBackground>


    );
}
const NotificationStack = StackNavigator({
    Home: {
        screen: Home,
    },
    Setting: {
        screen: Setting,
        navigationOptions: ({ navigation }) => ({
            header: props => <ImageHeaderWithBack {...props} title='Setting' />,
        })
    },
    EditProfile: {
        screen: EditProfile,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: false,
            header: props => <ImageHeaderWithBack {...props} title='Edit Profile' />,
        })
    },
    BlockedUser: {
        screen: BlockedUser,
        navigationOptions: ({ navigation }) => ({
            header: props => <ImageHeaderWithBack {...props} title='Blocked Users' />,
        })
    },
    AboutUs: {
        screen: AboutUs,
        navigationOptions: ({ navigation }) => ({
            header: props => <ImageHeaderWithBack {...props} title='About Us' />,
        })
    },
    Privacy: {
        screen: Privacy,
        navigationOptions: ({ navigation }) => ({
            header: props => <ImageHeaderWithBack {...props} title='Privacy Policy' />,
        })
    },
    ResetPassword: {
        screen: ResetPassword,
        navigationOptions: ({ navigation }) => ({
            header: props => <ImageHeaderForTermsAndCondition {...props} title='Reset Password' />,
        })
    },
    GameStart: {
        screen: GameStart,
        navigationOptions: ({ navigation }) => ({
            header: null,
            tabBarVisible: false,
        })
    },
    SelectMode: {
        screen: SelectMode,
        navigationOptions: ({ navigation }) => ({
            header: props => <ImageHeaderWithBack {...props} title='Select Mode' />,
        })
    },
    SelectAvatarEditProfile: {
        screen: SelectAvatarEditProfile,
    },
    SelectTopics: {
        screen: SelectTopics
    },
    SearchHistory: {
        screen: SearchHistory,
        navigationOptions: ({ navigation }) => ({
            header: props => <ImageHeaderWithBack {...props} title='Game History' />,
        })
    },

    SelectTypeSolo: {
        screen: SelectTypeSolo,
        navigationOptions: ({ navigation }) => ({
            header: props => <ImageHeaderWithBack {...props} title='Select Type' />,
        })
    },
    SelectTypeDuel: {
        screen: SelectTypeDuel,
        navigationOptions: ({ navigation }) => ({
            header: props => <ImageHeaderWithBack {...props} title='Select Type' />,
        })
    },
    MyTopics: {
        screen: MyTopics,
        navigationOptions: ({ navigation }) => ({
            header: props => <ImageHeaderWithBack {...props} title='My Topics' />,
        })
    },
    TermsAndCondition: {
        screen: TermsAndCondition,
        navigationOptions: ({ navigation }) => ({
            header: props => <ImageHeaderForTermsAndCondition {...props} title='Terms & Conditions' />,
        })
    },
    Privacy: {
        screen: Privacy,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: false,
            header: props => <ImageHeaderWithBack {...props} title='Privacy' />,
        })
    },
    AboutUs: {
        screen: AboutUs,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: false,
            header: props => <ImageHeaderWithBack {...props} title='About Us' />,
        })
    },
    Tutorial: {
        screen: Tutorial,
        navigationOptions: ({ navigation }) => ({
            header: props => <ImageHeaderWithBack {...props} title='Tutorial' />,
        })
    },
    SelectGame: {
        screen: SelectGame,
        navigationOptions: ({ navigation }) => ({
            header: props => <ImageHeaderWithBack {...props} title='Select Game' />,
        })
    },
    ForgotPassword: {
        screen: ForgotPassword,
        navigationOptions: ({ navigation }) => ({
            header: props => <ImageHeaderWithBack {...props} title='Forgot Password' />,
        })
    },
    SearchPlayerTopic: {
        screen: SearchPlayerTopic,
        navigationOptions: ({ navigation }) => ({
            header: props => <ImageHeaderWithBack {...props} title='Search' />,
        })
    },
    BlockedUser: {
        screen: BlockedUser,
        navigationOptions: ({ navigation }) => ({
            header: props => <ImageHeaderWithBack {...props} title='Blocked Users' />,
        })
    },
    InviteFriend: {
        screen: InviteFriend,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: true,
            header: props => <ImageHeaderWithBack {...props} title="Invite Friend" />,
        })
    },
    FriendList: {
        screen: FriendList,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: true,
            header: props => <ImageHeaderWithDualClub {...props} title='Friend List' />
        })
    },
    GroupInfo: {
        screen: GroupInfo,
        navigationOptions: ({ navigation }) => ({
            header: props => <ImageHeaderWithBack {...props} title='Group Info' />,
        })
    },
    friendListClub: {
        screen: friendListClub,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: true,
            header: props => <ImageHeaderWithFriendListClub {...props} title='Club' />
        })
    },
    LoaderDual: {
        screen: LoaderDual
    },
    Versus: {
        screen: Versus,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: false,
            header: props => <ImageHeaderWithDualClub {...props} title='Friend List' />,
        })
    },
    SelectRandomFrnd: {
        screen: SelectRandomFrnd,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: false,
            header: props => <ImageHeader {...props} title='Searching...' />,
        })
    },
    QuestionSmartSortSolo: {
        screen: QuestionSmartSortSolo,
        navigationOptions: ({ navigation }) => ({
            header: null,
            tabBarVisible: false,
        })
    },
    QuestionTop10Solo: {
        screen: QuestionTop10Solo,
        navigationOptions: ({ navigation }) => ({
            header: null,
            tabBarVisible: false,
        })
    },
    QuestionTop10Dual: {
        screen: QuestionTop10Dual,
        navigationOptions: ({ navigation }) => ({
            header: null,
            tabBarVisible: false,
        })
    },
    QuestionSmartSortDual: {
        screen: QuestionSmartSortDual,
        navigationOptions: ({ navigation }) => ({
            header: null,
            tabBarVisible: false,
        })
    },
    GameComplete: {
        screen: GameComplete,
        navigationOptions: ({ navigation }) => ({
            header: null,
            tabBarVisible: false,
        })
    },
    GameCompleteSmartSort: {
        screen: GameCompleteSmartSort,
        navigationOptions: ({ navigation }) => ({
            header: null,
            tabBarVisible: false,
        })
    },
    Result: {
        screen: Result,
        navigationOptions: () => ({
            tabBarVisible: false,
            header: null
        })
    },
    LeaderBoard: {
        screen: LeaderBoard,
    },
    LeaderBoardHome: {
        screen: LeaderBoardHome,
        navigationOptions: ({ navigation }) => ({
            header: props => <ImageHeaderWithBack {...props} title='Leaderboard' />,
        })
    },
    Versus: {
        screen: Versus,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: false,
            header: props => <ImageHeader {...props} title='Versus' />,
        })
    },
},
    {
        navigationOptions: {
            gesturesEnabled: false
        }
    });

export default NotificationStack;