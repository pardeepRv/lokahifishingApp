import React, {useState , useEffect} from 'react';
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
import {colors, screenNames} from '../../../utilities/constants';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { memberlisting } from '../../../store/actions';
import TimeAgo from 'react-native-timeago';
import { layout } from '../../../utilities/layout';

let members = [
  {
    img: icons.ic_LokahiLogo,
    username: 'princepardeepkmr',
    date: 'Member since 1 oct 2021',
    fullname:'Pardeep kumar'
  },
  {
    img: icons.ic_LokahiLogo,
    username: 'rv_kunal',
    date: 'Member since 2 oct 2021',
    fullname:'Kunal Chauhan'

  },
  {
    img: icons.ic_LokahiLogo,
    username: 'rvtechnologies',
    date: 'Member since 1 oct 2021',
    fullname:'Prince Pardeep'

  },
  {
    img: icons.ic_LokahiLogo,
    username: 'dev_pardeep',
    date: 'Member since 2 oct 2021',
    fullname:'New Name'

  },
];

const Members = ({navigation}) => {
  const [membersList, setMembersList] = useState([]);
  const [searchMember, setSearchMember] = useState('');
  const [tabIndex, setTabIndex] = React.useState(0);
  const [tabAscDscIndex, settabAscDscIndex] = React.useState(0);

  let auth = useSelector(state => state.auth);
  let app = useSelector(state => state.app);
  console.log(app, 'appp in timelinelist   page>>>>>>>>>>');
  console.log(auth, 'auth in timelinelist page >>>>>>>>>>');

  const [state, setState] = useState({
    refreshing: false,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('coming in this on timelinelist page');
    const unsubscribe = navigation.addListener('focus', () => {
        getmemberfunc();

    });
}, [navigation]);

function getmemberfunc() {
    let token = auth && auth?.userDetails?.access_token;
    dispatch(
      memberlisting(token, cb => {
            if (cb) {
                console.log(cb, 'callback list arr>>>>>>>>>>');
                if (cb?.data?.data) {
                    let memberList = cb?.data?.data?.memberListing;
                    memberList.reverse();
                    setMembersList(memberList)
                }
            }
        }),
    );
}

function _onRefresh() {
  setState({refreshing: true});
  getmemberfunc(app?.memberListing);
}
  const _renderView = ({item, index}) => (
    <TouchableOpacity
      onPress={() => 
        navigation.navigate(screenNames.FriendProfileScreen , {
          item:item
        })  
      }
      style={[
        styles.listView,
        {
          backgroundColor: colors.white1//index % 2 == 0 ? '#3c264a' : '#553456',
        },
      ]}
      activeOpacity={0.8}>
      <View style={styles.viewStyle}>
        <Image
          source={{uri: item.profile_picture}}
          style={{
            height: moderateScale(70),
            width: moderateScale(70),
            borderRadius: moderateScale(40),
          }}
        />
        <View
          style={{
            justifyContent: 'center',
            left:moderateScale(20),
            width:layout.size.width/2,
            margin:10,
          }}>
             <Text style={styles.nameStyle}>{item.user_name}</Text>
          {/* <Text style={styles.nameStyle}>FullName :{item.full_name}</Text> */}
          <Text>Member Since :
          <TimeAgo
                time={item.created_at}
              /></Text>
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

  const searchText = e => {
    setSearchMember(e);
    let text = e.toLowerCase();
    // let members = app?.memberListing;
    let members = app?.memberlisting;
    let memberfiltername = members.filter(item=> {
      return console.log(item , 'console on filter ');
      return item && item.user_name.toLowerCase().match(text);
    });

   return  console.log(memberfiltername, 'dbwdvewduyv');
    // if (!text || text === '') {
    //   setMembersList(user?.allFriendslist);
    // } else if (!Array.isArray(filteredName) && !filteredName.length) {
    //   setMembersList(user?.allFriendslist);
    // } else if (Array.isArray(filteredName)) {
    //   setMembersList(filteredName);
    // }
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
          title={'Members'}
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

        <View
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
        </View>

        {tabIndex == 0 ? (
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
            refreshControl={
              <RefreshControl
                refreshing={app.loading}
                onRefresh={_onRefresh.bind(this)}
                title="Pull to refresh"
                tintColor={colors.white1}
                titleColor={colors.white1}
              />
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
            refreshControl={
              <RefreshControl
                refreshing={app.loading}
                onRefresh={_onRefresh.bind(this)}
                title="Pull to refresh"
                tintColor={colors.white1}
                titleColor={colors.white1}
              />
            }
          />
        ) : null}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Members;
