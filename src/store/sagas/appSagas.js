import { put, retry } from 'redux-saga/effects';
import { request } from '../../utilities/request';
import { actionTypes, urls, screenNames } from '../../utilities/constants';
import logger from '../../utilities/logger';
import {
    getAPIError,
    showErrorAlert,
    showSuccessAlert,
    getLocalUserData
} from "../../utilities/helperFunctions";

function* fetchAll({ params }) {
    try {
        const config = {
            url: 'https://dog.ceo/api/breeds/image/random',
        };

        const response = yield request(config);
        yield put({
            type: actionTypes.FETCH_DATA_SUCCEEDED,
            url: response.data.message
        });

    } catch (error) {
        yield put({
            type: actionTypes.FETCH_DATA_FAIL,
        });
    }
} 

function* getvediosaga({params}) {
    try {
      const config = {
        url: urls.videos,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${params}`,
        },
      };
      const response = yield request(config);
       console.log(response, 'Video alll >>>>>> api ');
  
      if (response?.data?.status) {
        yield put({
          type: actionTypes.GET_VIDEO_SUCCEEDED,
          payload: response?.data?.data?.videos,
        });
      } else {
        yield put({
          type: actionTypes.GET_VIDEO_SUCCEEDED,
          payload: [],
        });
      }
    } catch (error) {
      showErrorAlert(getAPIError(error));
      yield put({
        type: actionTypes.GET_VIDEO_FAIL,
      });
    }
  }
 
export {
    fetchAll,
    getvediosaga,
  
};
