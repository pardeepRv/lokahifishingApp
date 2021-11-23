import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  RefreshControl,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import TimeAgo from 'react-native-timeago';
import {useDispatch, useSelector} from 'react-redux';
import {fonts, icons} from '../../../../assets';
import {Header} from '../../../components/common/Header';
import {Loader} from '../../../components/common/Loader';
import TextInputComp from '../../../components/common/TextInputComp';
import {friendlist} from '../../../store/actions';
import {colors} from '../../../utilities/constants';
import styles from './styles';

const Friends = ({navigation}) => {
  let user = useSelector(state => state.user);
  let auth = useSelector(state => state.auth);
  console.log(auth, 'auth in friendList   page>>>>>>>>>>');
  console.log(user, 'user in  friendList   page>>>>>>>>>>');

  const dispatch = useDispatch();

  const [membersList, setMembersList] = useState(user?.allFriendslist);
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
    setMembersList(user?.allFriendslist);
  }

  function _onRefresh() {
    setState({refreshing: true});
    getfriendlist(user?.allFriendslist);
  }

  const searchText = e => {
    setSearchMember(e);
    let text = e.toLowerCase();
    let friends = user?.allFriendslist;
    let filteredName = friends.filter(item => {
      console.log(item, 'consile ');
      return item && item.user && item.user.user_name.toLowerCase().match(text);
    });
    console.log(filteredName, 'dbwdvewduyv');
    if (!text || text === '') {
      setMembersList(user?.allFriendslist);
    } else if (!Array.isArray(filteredName) && !filteredName.length) {
      setMembersList(user?.allFriendslist);
    } else if (Array.isArray(filteredName)) {
      setMembersList(filteredName);
    }
  };

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
            <TimeAgo time={item?.user?.created_at} />
          </Text>
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
          // onChangeText={text => setSearchMember(text)}
          onChangeText={text => searchText(text)}
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
          extraData={membersList}
          data={membersList}
          renderItem={_renderView}
          keyExtractor={(item, index) => 'key' + index}
          ListEmptyComponent={() =>
            membersList >= 0 && (
              <Text style={styles.nomatch}>No Friend found</Text>
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
