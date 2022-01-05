import React, {useState} from 'react';
import {Modal , Text , TouchableOpacity , Image} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {moderateScale} from 'react-native-size-matters';
import {Header} from '.';
import {fonts, icons} from '../../../assets';
import {colors} from '../../utilities/constants';
import { layout } from '../../utilities/layout';

let images = [
  {
    url: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png',
  },
  {
    url: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
  },
];

const ImgViewer = props => {
  console.log(props, 'props in viewer');
  const [modalcomp, setModalcomp] = useState(props.modal);

  return (
    <Modal visible={props.modal} transparent={true}>
      <ImageViewer
        imageUrls={props.images}
        enableSwipeDown
        onSwipeDown={() => {
          props.setmodalFun(false);
          props.setImages();
        }}
        renderHeader={() => (
          // <Header
          //   containerStyle={{
          //     backgroundColor: 'transparent',
          //     height: moderateScale(60),
          //   }}
          //   title={''}
          //   titleStyle={{fontFamily: fonts.bold}}
          //   leftIconSource={icons.ic_back_white}
          //   leftButtonStyle={{
          //     tintColor: colors.white1,
          //     // backgroundColor:colors.white1,
          //     top:20
          //   }}
          //   onLeftPress={() => {
          //     props.setmodalFun(false);
          //     props.setImages();
          //   }}
          // />
          <TouchableOpacity style={{
                height: layout.size.height/9,
                justifyContent:'flex-end'
              }}
              onPress={() =>{
                props.setmodalFun(false);
                    props.setImages();
              }}>
          <Image style={{tintColor:colors.white1 , left:moderateScale(20),height:moderateScale(25), width:moderateScale(25) }} source={icons.ic_back_white}></Image>
          </TouchableOpacity>
        )}
      />
    </Modal>
  );
};

export default ImgViewer;
