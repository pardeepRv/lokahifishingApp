import React, {useState} from 'react';
import {Modal} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {moderateScale} from 'react-native-size-matters';
import {Header} from '.';
import {fonts, icons} from '../../../assets';
import {colors} from '../../utilities/constants';

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
          <Header
            containerStyle={{
              backgroundColor: 'transparent',
              height: moderateScale(60),
            }}
            title={''}
            titleStyle={{fontFamily: fonts.bold}}
            leftIconSource={icons.ic_back_white}
            leftButtonStyle={{
              tintColor: colors.white1,
            }}
            onLeftPress={() => {
              props.setmodalFun(false);
              props.setImages();
            }}
          />
        )}
      />
    </Modal>
  );
};

export default ImgViewer;
