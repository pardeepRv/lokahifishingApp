import {put, retry} from 'redux-saga/effects';
import {request} from '../../utilities/request';
import {actionTypes, urls, screenNames} from '../../utilities/constants';

import {getAPIError, showErrorAlert} from '../../utilities/helperFunctions';

function* fetchAll({params}) {
  try {
    const config = {
      url: 'https://dog.ceo/api/breeds/image/random',
    };

    const response = yield request(config);
    yield put({
      type: actionTypes.FETCH_DATA_SUCCEEDED,
      url: response.data.message,
    });
  } catch (error) {
    yield put({
      type: actionTypes.FETCH_DATA_FAIL,
    });
  }
}

export {fetchAll};
