import { Dimensions, Platform, StatusBar } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

let paddingTop = 0;

const majorVersionOS = parseInt(Platform.Version, 10);

let isOldOsVesion = false;

if (Platform.OS === 'ios') {
    console.log('ios version is:', majorVersionOS);

    if (majorVersionOS < 11) {
        isOldOsVesion = true;
        paddingTop = 20;
    }
} else {
    console.log('android version is:', majorVersionOS);

    if (majorVersionOS < 23) {
        isOldOsVesion = true;
    } else {
        paddingTop = StatusBar.currentHeight;
    }
}

const isIOS = Platform.OS === 'ios';

const layout = {
    size: {
        width,
        height,
    },
    paddingTop,
    statusBarHeight: getStatusBarHeight(),
    isIOS,
    isOldOsVesion
};

export { layout };
