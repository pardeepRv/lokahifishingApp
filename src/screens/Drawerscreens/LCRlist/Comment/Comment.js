import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { moderateScale } from 'react-native-size-matters';
import TimeAgo from 'react-native-timeago';
import { useDispatch, useSelector } from 'react-redux';
import { fonts, icons } from '../../../../../assets';
import { Header } from '../../../../components/common/Header';
import { Loader } from '../../../../components/common/Loader';
import { addComment, getLcrComments, photoaddcomment, photoaddcommentlist } from '../../../../store/actions';
import { colors } from '../../../../utilities/constants';
import { layout } from '../../../../utilities/layout';

let data = [
  {
    id: 1,
    image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    name: 'Frank Odalthh',
    comment:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
  },
  {
    id: 2,
    image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
    name: 'John DoeLink',
    comment:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
  },
  {
    id: 3,
    image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    name: 'March SoulLaComa',
    comment:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
  },
  {
    id: 4,
    image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
    name: 'Finn DoRemiFaso',
    comment:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
  },
  {
    id: 5,
    image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
    name: 'Maria More More',
    comment:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
  },
  {
    id: 6,
    image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
    name: 'Clark June Boom!',
    comment:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
  },
  {
    id: 7,
    image: 'https://bootdey.com/img/Content/avatar/avatar5.png',
    name: 'The googler',
    comment:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
  },
];

const Comment = ({ navigation, route }) => {
  console.log(route, 'receive in route>>>>');

  const { lcr_id, list } = route && route.params;
  console.log(list, lcr_id, '>>>>>>>>>>>>???');
  let auth = useSelector(state => state.auth);
  let app = useSelector(state => state.app);

  const [comments, setcomments] = useState('');
  const [commentList, setCommentList] = useState([]);

  console.log(auth, 'auth>>>>>>>>>>>>', app, 'app>>>>>>>>>>>>>>>>');
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (list == '1') {
        getlcrCommentsList();

      } else {
        getphotodharingCommentsList();
      }
    });
    return unsubscribe;
  }, [navigation]);

  function getlcrCommentsList() {
    let obj = {};

    obj.token = auth && auth?.userDetails?.access_token;
    obj.lcr_id = lcr_id;

    dispatch(
      getLcrComments(obj, cb => {
        if (cb) {
          console.log(cb, 'callBack in comments');
          if (cb?.data?.data) {
            setCommentList(cb?.data?.data?.lcrCommentListing);
          }
        }
      }),
    );
  }


  function getphotodharingCommentsList() {
    let obj = {};

    obj.token = auth && auth?.userDetails?.access_token;
    obj.photoshare_id = lcr_id;

    dispatch(
      photoaddcommentlist(obj, cb => {
        if (cb) {
          console.log(cb, 'callBack in comments');
          if (cb?.data?.data) {
            setCommentList(cb?.data?.data?.photosharecommentListing);
          }
        }
      }),
    );
  }
  //hit api here
  const add_comment = () => {
    let token = auth && auth.userDetails.access_token;

    if (comments == '' || comments.length == 0) {
      return alert('Please enter something!');
    }
    let formData = new FormData();
    if (list == '1') {
      formData.append('lcr_id', lcr_id);
      formData.append('user_id', auth && auth?.userDetails?.id);
      formData.append('comment', comments);
      console.log(formData, 'sending to aApi');

      dispatch(addComment(formData, token));
      setcomments('');
      getlcrCommentsList();
    } else {
      formData.append('photoshare_id', lcr_id);
      formData.append('user_id', auth && auth?.userDetails?.id);
      formData.append('comment', comments);
      console.log(formData, 'sending to aApi');

      dispatch(photoaddcomment(formData, token)); /// addd commnt in phot sharing
      setcomments('');
      getphotodharingCommentsList(); //get coooment list of photo 
    }
  };

  const _renderView = ({ item, index }) => (
    <View style={styles.container}>
      {item && item.user && item.user.profile_picture != null ? (
        <Image style={styles.image} source={{ uri: item.user.profile_picture }} />
      ) : null}

      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.name}>{item.user.full_name}</Text>
          <TimeAgo style={styles.time} time={item.created_at} />
        </View>
        <Text>{item.comment}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white1,
      }}>
      <Header
        containerStyle={{
          backgroundColor: colors.secondry,
          height: moderateScale(60),
        }}
        titleStyle={{ fontFamily: fonts.bold }}
        leftIconSource={icons.ic_back_white}
        leftButtonStyle={{
          tintColor: colors.white1,
        }}
        onLeftPress={() => {
          navigation.goBack();
        }}
      />
      
     <KeyboardAvoidingView    behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
              style={styles.subContainer}
              contentContainerStyle={styles.subContentContainer}
              keyboardShouldPersistTaps={'always'}
              showsVerticalScrollIndicator={false}>
      <FlatList
        style={styles.root}
        data={commentList}
        extraData={commentList}
        contentInset={{ bottom: 60 }}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        ListHeaderComponent={() =>
          !commentList.length ? (
            <Text
              style={{
                alignSelf: 'center',
                marginTop: 20,
                fontFamily: fonts.semiBold,
              }}>
              No Result found
            </Text>
          ) : null
        }
        renderItem={_renderView}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />
      
      <View
        style={{
          bottom:10,
          width: layout.size.width,
          margin: 0,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          backgroundColor: colors.secondry,
        }}>
        <TextInput
          style={{
            height: moderateScale(50),
            borderWidth: 1,
            padding: 10,
            backgroundColor: colors.white1,
            width: layout.size.width - 50,
          }}
          onChangeText={comments => setcomments(comments)}
          value={comments}
          placeholder="Enter your comment here ...."
          keyboardType="default"
          multiline={true}
        />
        <TouchableOpacity
          onPress={add_comment}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={icons.plane}
            style={{
              alignSelf: 'center',
              tintColor: colors.white1,
              height: 30,
              width: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    
      </KeyboardAvoidingView>
   
      <Loader isLoading={app.loading} isAbsolute />
    </SafeAreaView>
  );
};

export default Comment;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#ffffff',
    marginTop: 10,
  },
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  containerStyle: {
    flex: 1,

  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginLeft: 20,
  },
  time: {
    fontSize: 11,
    color: '#808080',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subContainer: {
    height: layout.size.height -79,
    backgroundColor:colors.secondry
  },
  subContentContainer: {
    paddingBottom: moderateScale(20),
  },
});
