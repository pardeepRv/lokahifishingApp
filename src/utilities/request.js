import Axios, { AxiosRequestConfig } from 'axios';

import { actionTypes,urls } from './constants';
import store from '../store';
console.log(urls.baseUrl,'urls.baseUrl')

const axios = Axios.create({
    baseURL: urls.baseUrl,
    validateStatus: (status) => {
        if (status === 200 || status === 401) {
            return true;
        }
        return false;
    },
    timeout: 30000 //30 seconds
});

export const request = (config: AxiosRequestConfig) => axios(config).then((response) => {
    debugger
    console.log(response,'respinseeeeee')
    if (response.status === 401) {
        return store.dispatch({
            type: actionTypes.SESSION_EXPIRE_REQUESTED,
            // params: {
            //     hideAlert: false
            // }
        });
    }

    return response;
});
