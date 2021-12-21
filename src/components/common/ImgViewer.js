import React, { useState } from 'react';
import {
    Modal
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';


let images = [
    {
        url:
            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png',
    },
    {
        url:
            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
    },
];

const ImgViewer = (props) => {
    console.log(props, 'props in viewer');
    const [modalcomp, setModalcomp] = useState(props.modal);

    return (
        <Modal visible={props.modal} transparent={true}>
            <ImageViewer
                imageUrls={props.images}
                enableSwipeDown
                onSwipeDown={() => {
                    props.setmodalFun(false)
                    props.setImages();
                }}
                renderHeader={() => (
                    null
                )}
            />
        </Modal>
    );
};

export default ImgViewer;
