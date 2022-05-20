import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, useLinkBuilder} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

//navigation screens
import ForgotPassword from '../screens/AuthScreens/ForgotPassword/ForgotPassword';
import Signin from '../screens/AuthScreens/Signin/Signin';
/************ Screens *************** */
//authScreen
import Signup from '../screens/AuthScreens/Signup/Signup';
import About from '../screens/Drawerscreens/About/About';
import ChangePassword from '../screens/Drawerscreens/ChangePassword/ChangePassword';
import Members from '../screens/Drawerscreens/Members/Members';
import MYprofile from '../screens/Drawerscreens/MYprofile/MYprofile';
import PdfViewer from '../screens/Drawerscreens/PDFViewer/PdfViewer';
import PrivacyPolicy from '../screens/Drawerscreens/PrivacyPolicy/PrivacyPolicy';
import Settings from '../screens/Drawerscreens/Settings/Settings';
import Survey from '../screens/Drawerscreens/Survey/Survey';
import TermsandCondition from '../screens/Drawerscreens/TermsandCondition/TermsandCondition';
import TournamentRules from '../screens/Drawerscreens/TournamentRules/TournamentRules';
import Video from '../screens/Drawerscreens/VideoTips/Video';
import DrawerComp from '../screens/NavigationScreens/Home/DrawerComp';
import Home from '../screens/NavigationScreens/Home/Home';
import News from '../screens/NavigationScreens/News/News';
import TournamentHome from '../screens/NavigationScreens/TournamentHome/TournamentHome';
import BoatInfo from '../screens/Drawerscreens/MYprofile/BoatInfo';
import EmergencyContacts from '../screens/Drawerscreens/MYprofile/EmergencyContacts';
import LCR from '../screens/Drawerscreens/MYprofile/LCR';
import Edit from '../screens/Drawerscreens/Edit /Edit';
import DataFeeds from '../screens/NavigationScreens/DataFeeds/DataFeeds';
import Tide from '../screens/NavigationScreens/DataFeeds/Tide/Tide';
import SeaTemp from '../screens/NavigationScreens/DataFeeds/SeaTemp/SeaTemp';
import Wind from '../screens/NavigationScreens/DataFeeds/Wind/Wind';
import Current from '../screens/NavigationScreens/DataFeeds/Current/Current';
import Radar from '../screens/NavigationScreens/DataFeeds/Radar/Radar';
import Weather from '../screens/NavigationScreens/DataFeeds/Weather/Weather';
import CatchReport from '../screens/NavigationScreens/CatchReport/CatchReport';
import SelectBoatFishing from '../screens/NavigationScreens/SelectBoatFishing/SelectBoatFishing';
import ShortLineFishing from '../screens/NavigationScreens/SelectBoatFishing/ShorLineFishing';
import PhotoSharing from '../screens/NavigationScreens/PhotoSharing/PhotoSharing';
import {navigationRef} from '../store/NavigationService';
import LCRFilter from '../screens/Drawerscreens/LCRFilter/LCRFilter';
import LCRlist from '../screens/Drawerscreens/LCRlist/LCRlist';
import PhotoSharingPost from '../screens/Drawerscreens/PhotoSharingPost/PhotoSharingPost';
import LeaderBoard from '../screens/NavigationScreens/LeaderBoard/LeaderBoard';
import BottomFishing from '../screens/NavigationScreens/SelectBoatFishing/BottomFishing/BottomFishing';
import LCRDetails from '../screens/Drawerscreens/LCRlist/LCRDetails/LCRDetails';
import EditLCRDetails from '../screens/Drawerscreens/LCRlist/EditLCRDetails/EditLCRDetails';
import UploadImage from '../screens/Drawerscreens/LCRlist/UploadImage/UploadImage';
import OffShoreFishing from '../screens/NavigationScreens/SelectBoatFishing/OffshoreFishing/OffShoreFishing';
import TagandRealse from '../screens/NavigationScreens/SelectBoatFishing/TagandRealse/TagandRealse';
import stokunagastore from '../screens/NavigationScreens/DataFeeds/WebViews/STokunaga';
import NittaFishing from '../screens/NavigationScreens/DataFeeds/WebViews/Nitta';
import PacificRim from '../screens/NavigationScreens/DataFeeds/WebViews/PacificRim';
import MorrisLures from '../screens/NavigationScreens/DataFeeds/WebViews/MorrisLuresBanner';
import Nicos from '../screens/NavigationScreens/DataFeeds/WebViews/NicosLogo';
import PopHawaii from '../screens/NavigationScreens/DataFeeds/WebViews/BannerShane';
import Hobbietat from '../screens/NavigationScreens/DataFeeds/WebViews/BannerRoy';
import ArcSolutions from '../screens/NavigationScreens/DataFeeds/WebViews/ARCLogo';
import Tsutomu from '../screens/NavigationScreens/DataFeeds/WebViews/ahieps';
import Gyotaku from '../screens/NavigationScreens/DataFeeds/WebViews/Gyotaku';
import LeaderBoardType from '../screens/NavigationScreens/LeaderBoard/LeaderBoardType/LeaderBoardType';
import FishDetails from '../screens/NavigationScreens/SelectBoatFishing/FishDetails/fishDetails';
import DeepBottom from '../screens/NavigationScreens/SelectBoatFishing/DeepBottom/DeepBottom';
import ShallowBottom from '../screens/NavigationScreens/SelectBoatFishing/ShallowBottom/ShallowBottom';
import Whipping from '../screens/NavigationScreens/SelectBoatFishing/Whipping/Whipping';
import Baitcasting from '../screens/NavigationScreens/SelectBoatFishing/Baitcasting/Baitcasting';
import SlideBait from '../screens/NavigationScreens/SelectBoatFishing/SlideBait/SlideBait';
import Effort from '../screens/NavigationScreens/SelectBoatFishing/Efffort/Effort';
import FishData from '../screens/NavigationScreens/SelectBoatFishing/FishData/FishData';

import FriendRequests from '../screens/Drawerscreens/FriendRequests/FriendRequests';
import Friends from '../screens/Drawerscreens/Friends/Friends';
import Gallery from '../screens/Drawerscreens/Gallery/Gallery';
import UploadImg from '../screens/NavigationScreens/SelectBoatFishing/UploadImg/UploadImg';
import TagR from '../screens/Drawerscreens/TagR/TagR';
import QustionAnswer from '../screens/Drawerscreens/Survey/QustionAnswer';
import PendingLCR from '../screens/Drawerscreens/pendingLCR/PendingLCR';
import FriendProfileScreen from '../screens/Drawerscreens/FriendProfileScreen/FriendProfileScreen';
import FriendBoatInfo from '../screens/Drawerscreens/FriendProfileScreen/FriendBoatInfo';
import FriendEmergencyContacts from '../screens/Drawerscreens/FriendProfileScreen/FriendEmergencyContacts';
import FriendLCR from '../screens/Drawerscreens/FriendProfileScreen/FriendLCR';
import LCRRequired from '../screens/NavigationScreens/SelectBoatFishing/LCRRequired';
import LeaderboardCard from '../screens/NavigationScreens/LeaderBoard/leaderboardCard';
import Importantlinks from '../screens/Drawerscreens/Importantlinks/Importantlinks';
import FishingWebsite from '../screens/Drawerscreens/Importantlinks/FishingWebsite';
import HawaiiLegislature from '../screens/Drawerscreens/Importantlinks/HawaiiLegislatureWebsite';
import ModalListComponent from '../screens/NavigationScreens/SelectBoatFishing/ModalListComponent/ModalListComponent';
import Circular from '../components/common/Circular';
import VideoTips from '../screens/Drawerscreens/VideoTips/VideoTips';
import Webviewer from '../components/common/Webviewer';
import ExtraFishingType from '../screens/NavigationScreens/SelectBoatFishing/ExtraFishingType';
import PhotosScreen from '../screens/NavigationScreens/PhotoSharing/PhotosScreen/PhotosScreen';
import Videoscreen from '../screens/NavigationScreens/PhotoSharing/Videos/Videos';
import Comment from '../screens/Drawerscreens/LCRlist/Comment/Comment';
import Like from '../screens/Drawerscreens/LCRlist/Like/like';
import AndroidMap from '../screens/NavigationScreens/SelectBoatFishing/AndroidMap/AndroidMap';

const Stack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const commonScreensOptions = {
  headerStyle: {
    elevation: 1,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
  },
};

const HomeStackScreen = props => {
  // console.log(props, 'porps sednn');
  let auth = useSelector(state => state.auth);
  // console.log(auth, 'auth in navigator');
  return (
    <Drawer.Navigator
      initialRouteName="Drawer"
      drawerContent={props => {
        props.useDetails = auth && auth.userDetails;
        return DrawerComp({...props});
      }}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={Home} options={{}} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="TermsandCondition" component={TermsandCondition} />
      <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Drawer.Screen name="PdfViewer" component={PdfViewer} />
      <Drawer.Screen name="TournamentRules" component={TournamentRules} />
      <Drawer.Screen name="Survey" component={SurveyStack} />
      <Drawer.Screen name="Members" component={MemberStack} />
      <Drawer.Screen name="Tournament" component={TournamentHome} />
      <Drawer.Screen name="Settings" component={settingsStack} />
      <Drawer.Screen name="News" component={News} />
      <Drawer.Screen name="Video" component={Video} />
      <Drawer.Screen name="VideoTips" component={VideoTips} />
      <Drawer.Screen name="MYprofile" component={MYprofileStack} />
      <Drawer.Screen name="DataFeeds" component={DataFeedsStack} />
      <Drawer.Screen name="catchReportStack" component={catchReportStack} />
      <Drawer.Screen name="PhotoSharing" component={PhotoSharingStack} />
      <Drawer.Screen name="LCRFilter" component={LcrFilterStack} />
      <Drawer.Screen name="LCRlist" component={LcrListStack} />
      <Drawer.Screen name="LeaderBoard" component={LeaderBoardStack} />
      <Drawer.Screen name="FriendRequests" component={FriendRequests} />
      <Drawer.Screen name="Friends" component={Friends} />
      <Drawer.Screen name="Gallery" component={GallerytStack} />
      <Drawer.Screen name="TagR" component={TagR} />
      <Drawer.Screen name="PendingLCR" component={PendingLCR} />
      <Drawer.Screen
        name="FriendProfileScreen"
        component={FriendProfileScreen}
      />
      <Drawer.Screen name="FriendBoatInfo" component={FriendBoatInfo} />
      <Drawer.Screen
        name="FriendEmergencyContacts"
        component={FriendEmergencyContacts}
      />
      <Drawer.Screen name="FriendLCR" component={FriendLCR} />
      <Drawer.Screen name="Importantlinks" component={Importantlinks} />
      <Drawer.Screen name="FishingWebsite" component={FishingWebsite} />
      <Drawer.Screen
        name="HawaiiLegislatureWebsite"
        component={HawaiiLegislature}
      />
    </Drawer.Navigator>
  );
};

const MainNavigator = props => {
  return (
    // <NavigationContainer ref={navigationRef}>
    <NavigationContainer initialRouteName={'authStack'} ref={navigationRef}>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <MainStack.Screen name="authStack" component={authStack} />
        <MainStack.Screen name="HomeStack" component={HomeStackScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

const authStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Signin'}>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};
const MemberStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'SurveyScreen'}>
      <Stack.Screen name="Members" component={Members} />
      <Stack.Screen
        name="FriendProfileScreen"
        component={FriendProfileScreen}
      />
      <Stack.Screen name="FriendBoatInfo" component={FriendBoatInfo} />
      <Stack.Screen
        name="FriendEmergencyContacts"
        component={FriendEmergencyContacts}
      />
      <Stack.Screen name="FriendLCR" component={FriendLCR} />
    </Stack.Navigator>
  );
};
const SurveyStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'SurveyScreen'}>
      <Stack.Screen name="SurveyScreen" component={Survey} />
      <Stack.Screen name="QuestionAnswer" component={QustionAnswer} />
    </Stack.Navigator>
  );
};
const settingsStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'SettingScreen'}>
      <Stack.Screen name="SettingScreen" component={Settings} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
};
const GallerytStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'GalleryScreen'}>
      <Stack.Screen name="GalleryScreen" component={Gallery} />
    </Stack.Navigator>
  );
};

const PhotoSharingStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'PhotoSharingScreen'}>
      <Stack.Screen name="PhotoSharingScreen" component={PhotoSharing} />
      <Stack.Screen name="PhotosScreen" component={PhotosScreen} />
      <Stack.Screen name="Videoscreen" component={Videoscreen} />
      <Stack.Screen name="Like" component={Like} />
      <Stack.Screen name="Comment" component={Comment} />
    </Stack.Navigator>
  );
};
const LeaderBoardStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'LeaderBoardScreen'}>
      <Stack.Screen name="LeaderBoardScreen" component={LeaderBoard} />
      <Stack.Screen name="LeaderBoardType" component={LeaderBoardType} />
      <Stack.Screen name="leaderboardCard" component={LeaderboardCard} />
    </Stack.Navigator>
  );
};
const catchReportStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'CatchReport'}>
      <Stack.Screen name="CatchReport" component={CatchReport} />
      <Stack.Screen name="SelectBoatFishing" component={SelectBoatFishing} />
      <Stack.Screen name="ExtraFishingType" component={ExtraFishingType} />
      <Stack.Screen name="ShorLineFishing" component={ShortLineFishing} />
      <Stack.Screen name="BottomFishing" component={BottomFishing} />
      <Stack.Screen name="OffShoreFishing" component={OffShoreFishing} />
      <Stack.Screen name="TagandRealse" component={TagandRealse} />
      <Stack.Screen name="FishDetails" component={FishDetails} />
      <Stack.Screen name="DeepBottom" component={DeepBottom} />
      <Stack.Screen name="ShallowBottom" component={ShallowBottom} />
      <Stack.Screen name="Whipping" component={Whipping} />
      <Stack.Screen name="Baitcasting" component={Baitcasting} />
      <Stack.Screen name="SlideBait" component={SlideBait} />
      <Stack.Screen name="Effort" component={Effort} />
      <Stack.Screen name="FishData" component={FishData} />
      <Stack.Screen name="UploadImg" component={UploadImg} />
      <Stack.Screen name="LCRRequired" component={LCRRequired} />
      <Stack.Screen name="PhotosScreen" component={PhotosScreen} />
      <Stack.Screen name="Circular" component={Circular} />
      <Stack.Screen name="AndroidMap" component={AndroidMap} />

      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen
          name="ModalListComponent"
          component={ModalListComponent}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const MYprofileStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'MYprofileScreen'}>
      <Stack.Screen name="MYprofileScreen" component={MYprofile} />
      <Stack.Screen name="BoatInfo" component={BoatInfo} />
      <Stack.Screen name="EmergencyContacts" component={EmergencyContacts} />
      <Stack.Screen name="LCR" component={LCR} />
      <Stack.Screen name="Edit" component={Edit} />
    </Stack.Navigator>
  );
};
const DataFeedsStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'DataFeedsScreen'}>
      <Stack.Screen name="DataFeedsScreen" component={DataFeeds} />
      {/* <Stack.Screen name="Tide" component={Tide} />
      <Stack.Screen name="SeaTemp" component={SeaTemp} />
      <Stack.Screen name="Wind" component={Wind} />
      <Stack.Screen name="Current" component={Current} />
      <Stack.Screen name="Radar" component={Radar} />
      <Stack.Screen name="Weather" component={Weather} />
      <Stack.Screen name="STokunaga" component={stokunagastore} />
      <Stack.Screen name="Nitta" component={NittaFishing} />
      <Stack.Screen name="pacificRim" component={PacificRim} />
      <Stack.Screen name="MorrisLuresBanner" component={MorrisLures} />
      <Stack.Screen name="NicosLogo" component={Nicos} />
      <Stack.Screen name="BannerShane" component={PopHawaii} />
      <Stack.Screen name="BannerRoy" component={Hobbietat} />
      <Stack.Screen name="ARCLogo" component={ArcSolutions} />
      <Stack.Screen name="ahieps" component={Tsutomu} />
      <Stack.Screen name="Gyotaku" component={Gyotaku} /> */}
      <Stack.Screen name="Webviewer" component={Webviewer} />
    </Stack.Navigator>
  );
};

const LcrListStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'LCRlistScreen'}>
      <Stack.Screen name="LCRlistScreen" component={LCRlist} />
      <Stack.Screen name="PhotoSharingPost" component={PhotoSharingPost} />
      <Stack.Screen name="LCRDetails" component={LCRDetails} />
      <Stack.Screen name="EditLCRDetails" component={EditLCRDetails} />
      <Stack.Screen name="UploadImage" component={UploadImage} />
      <Stack.Screen name="Comment" component={Comment} />
      <Stack.Screen name="Like" component={Like} />
    </Stack.Navigator>
  );
};
const LcrFilterStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'LCRFilterScreen'}>
      <Stack.Screen name="LCRFilterScreen" component={LCRFilter} />
    </Stack.Navigator>
  );
};
export default MainNavigator;
