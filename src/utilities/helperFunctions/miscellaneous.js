import { Alert, PermissionsAndroid, Platform } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import Axios from 'axios';

import { GOOGLE_API_KEY } from '../constants/otherConstants';
import { fonts } from '../../../assets';
import { layout } from '../layout';
import store from '../../store';

const showErrorAlert = (alertMessage, options = {}) => {
    showMessage({
        message: 'error',
        description: String(alertMessage),
        type: 'danger',
        floating: true,
        duration: 4000,
        style: { marginTop: layout.isIOS ? 0 : 20 },
        textStyle: { fontFamily: fonts.regular },
        titleStyle: { fontFamily: fonts.regular },
        // style: { paddingTop: (!layout.isIOS) ? 22 : 0 },
        ...options
    });
};

const showSuccessAlert = (alertMessage, options = {}) => {
    showMessage({
        message: 'success',
        description: String(alertMessage),
        type: 'success',
        floating: true,
        duration: 4000,
        style: { marginTop: layout.isIOS ? 0 : 20 },
        textStyle: { fontFamily: fonts.regular },
        titleStyle: { fontFamily: fonts.regular },
        // style: { paddingTop: (!layout.isIOS) ? 22 : 0 },
        ...options
    });
};

const showInfoAlert = (alertMessage, options = {}) => {
    showMessage({
        message: 'info',
        description: String(alertMessage),
        type: 'info',
        floating: true,
        duration: 4000,
        style: { marginTop: layout.isIOS ? 0 : 20 },
        textStyle: { fontFamily: fonts.regular },
        titleStyle: { fontFamily: fonts.regular },
        // style: { paddingTop: (!layout.isIOS) ? 22 : 0 },
        ...options
    });
};

const getAPIError = (error) => {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        /* console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers); */
        if (error.response.data && (error.response.data.msg || error.response.data.message)) {
            return error.response.data.msg || error.response.data.message;
        }
    }
    return 'Something went wrong';
};


const sortAdsByPrice = (allAds, descending) => {
    const ads = cloneDeep(allAds);

    if (descending) {
        return ads.sort((a, b) => parseFloat(b.price || 0) - parseFloat(a.price || 0));
    }

    return ads.sort((a, b) => parseFloat(a.price || 0) - parseFloat(b.price || 0));
};

const sortAdsByDate = (allAds, descending) => {
    const ads = cloneDeep(allAds);

    if (descending) {
        // return ads.sort(function (a, b) {
        //     // Turn your strings into dates, and then subtract them
        //     // to get a value that is either negative, positive, or zero.
        //     return new Date(b.created_at) - new Date(a.created_at);
        // });
        return ads.sort((a, b) => new Moment(b.created_at).format('YYYYMMDD') - new Moment(a.created_at).format('YYYYMMDD'))
        // return ads.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }

    // return ads.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    return ads.sort((a, b) => new Moment(a.created_at).format('YYYYMMDD') - new Moment(b.created_at).format('YYYYMMDD'))

};

const formatNumber = (number) => String(number).replace(/(.)(?=(\d{3})+$)/g, '$1,');

const getSMSDivider = () => (layout.isIOS ? '&' : '?');

const requestCameraPermission = () => new Promise((resolve, reject) => {
    if (Platform.OS === 'ios') {
        return resolve();
    }

    return PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ]).then((grantedResponse) => {
        const granted = PermissionsAndroid.RESULTS.GRANTED;
        if (
            grantedResponse['android.permission.CAMERA'] !== granted ||
            grantedResponse['android.permission.READ_EXTERNAL_STORAGE'] !== granted
            || grantedResponse['android.permission.WRITE_EXTERNAL_STORAGE'] !== granted
        ) {
            console.log('You can\'t use the camera');
            Alert.alert(
                "Permission to use camera and storage",
                "We need your permission to use your camera and storage to upload Ad images."
            );
            return reject('Camera permission denied');
        }

        return resolve();
    }).catch((error) => {
        console.log('Ask Camera permission error: ', error);
        return reject(error);
    });
});

export {
    showErrorAlert,
    showSuccessAlert,
    showInfoAlert,
    getAPIError,
    sortAdsByPrice,
    sortAdsByDate,
    getSMSDivider,
    formatNumber,
    requestCameraPermission
};
