import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import SegmentedControl from 'rn-segmented-control';
import {fonts, icons} from '../../../../assets';
import {Header} from '../../../components/common/Header';
import TextInputComp from '../../../components/common/TextInputComp';
import {colors} from '../../../utilities/constants';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {Loader} from '../../../components/common/Loader';
import {friendlist} from '../../../store/actions';
import TimeAgo from 'react-native-timeago';

let members = [
  {
    img: icons.ic_LokahiLogo,
    username: 'princepardeepkmr',
    date: 'Member since 1 oct 2021',
    fullname: 'Pardeep kumar',
  },
  {
    img: icons.ic_LokahiLogo,
    username: 'rv_kunal',
    date: 'Member since 2 oct 2021',
    fullname: 'Kunal Chauhan',
  },
  {
    img: icons.ic_LokahiLogo,
    username: 'rvtechnologies',
    date: 'Member since 1 oct 2021',
    fullname: 'Prince Pardeep',
  },
  {
    img: icons.ic_LokahiLogo,
    username: 'dev_pardeep',
    date: 'Member since 2 oct 2021',
    fullname: 'New Name',
  },
];

const Friends = ({navigation}) => {

  let user = useSelector(state => state.user);
  let auth = useSelector(state => state.auth);
  console.log(auth, 'auth in friendList   page>>>>>>>>>>');
  console.log(user, 'user in  friendList   page>>>>>>>>>>');

  const dispatch = useDispatch();

  const [membersList, setMembersList] = useState(members);
  const [searchMember, setSearchMember] = useState('');
  const [tabIndex, setTabIndex] = React.useState(0);
  const [tabAscDscIndex, settabAscDscIndex] = React.useState(0);
  const [state, setState] = useState({
    refreshing: false,
  });

  //hit Api here
  useEffect(() => {
    console.log('coming in this on frindz page');
    const unsubscribe = navigation.addListener('focus', () => {
      getfriendlist();
    });
    return unsubscribe;
  }, [navigation]);

  function getfriendlist() {
    let token = auth && auth?.userDetails?.access_token;
    dispatch(friendlist(token));
  }

  function _onRefresh() {
    setState({refreshing: true});
    getfriendlist();
  }

  const _renderView = ({item, index}) => (
    <TouchableOpacity
      style={[
        styles.listView,
        {
          backgroundColor: colors.white1, //index % 2 == 0 ? '#3c264a' : '#553456',
        },
      ]}
      activeOpacity={0.8}>
      <View style={styles.viewStyle}>
        <Image
          source={
            item?.user?.profile_picture
              ? {uri: item?.user?.profile_picture}
              : icons.fish2
          }
          style={{
            height: moderateScale(70),
            width: moderateScale(70),
            borderRadius: moderateScale(40),
          }}
        />
        <View
          style={{
            justifyContent: 'center',
          }}>
          <Text style={styles.nameStyle}>{item?.user?.user_name}</Text>
          <Text style={styles.dateStyle}>
          <TimeAgo time={item?.user?.created_at}/></Text>
        </View>
      </View>
      <Image source={icons.ic_rightArrow} style={styles.rightArrow} />
    </TouchableOpacity>
  );

  const handleTabsChange = index => {
    setTabIndex(index);
  };

  const handleTabsChangeAscDsc = index => {
    settabAscDscIndex(index);
  };

  return (
    <ImageBackground
      source={icons.ic_signup_bg}
      style={{flex: 1, height: '100%'}}>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <Header
          containerStyle={{
            backgroundColor: 'transparent',
            height: moderateScale(60),
          }}
          title={'Friends List'}
          titleStyle={{fontFamily: fonts.bold}}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.white1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
        />

        <TextInputComp
          value={searchMember}
          placeholder={'Please enter something!'}
          labelTextStyle={{
            fontFamily: fonts.semiBold,
            fontSize: moderateScale(16),
            color: colors.white1,
          }}
          onChangeText={text => setSearchMember(text)}
        />

        {/* <View
          style={{
            flexDirection: 'row',
          }}>
          <SegmentedControl
            tabs={['Username', 'Date Joined', 'Fullname']}
            paddingVertical={5}
            containerStyle={{
              marginVertical: 10,
            }}
            onChange={handleTabsChange}
            currentIndex={tabIndex}
            width={Dimensions.get('screen').width - 90}
            textStyle={{
              fontWeight: '300',
              fontSize: 14,
            }}
          />
          <SegmentedControl
            tabs={['Asc', 'Dsc']}
            paddingVertical={10}
            containerStyle={{
              marginVertical: 10,
            }}
            onChange={handleTabsChangeAscDsc}
            currentIndex={tabAscDscIndex}
            width={Dimensions.get('screen').width / 5}
            textStyle={{
              fontWeight: '300',
              fontSize: 14,
            }}
          />
        </View> */}

        {/* {tabIndex == 0 ? (
          <FlatList
            extraData={membersList}
            data={membersList}
            renderItem={_renderView}
            keyExtractor={(item, index) => 'key' + index}
            ListHeaderComponent={() =>
              !membersList.length ? (
                <Text style={styles.nomatch}>No Match found</Text>
              ) : null
            }
          />
        ) : tabIndex == 2 ? (
          <FlatList
            extraData={membersList}
            data={membersList}
            renderItem={_renderView}
            keyExtractor={(item, index) => 'key' + index}
            ListHeaderComponent={() =>
              !membersList.length ? (
                <Text style={styles.nomatch}>No Match found</Text>
              ) : null
            }
          />
        ) : null} */}

        <FlatList
          extraData={user?.allFriendslist}
          data={user?.allFriendslist}
          renderItem={_renderView}
          keyExtractor={(item, index) => 'key' + index}
          ListEmptyComponent={() =>
            user &&
            user.allFriendslist &&
            user.allFriendslist.length >= 0 && (
              <Text style={styles.nomatch}>No Request found</Text>
            )
          }
          refreshControl={
            <RefreshControl
              refreshing={user.loading}
              onRefresh={_onRefresh.bind(this)}
              title="Pull to refresh"
              tintColor={colors.white1}
              titleColor={colors.white1}
            />
          }
        />
      </SafeAreaView>
      <Loader isLoading={auth.loading} isAbsolute />
    </ImageBackground>
  );
};

export default Friends;
