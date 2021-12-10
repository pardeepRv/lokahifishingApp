import {actionTypes} from '../../utilities/constants';

const getvideo = params => ({
  type: actionTypes.GET_VIDEO_REQUESTED,
  params,
});

const getNewsFromAdmin = params => ({
  type: actionTypes.GET_NEWS_REQUESTED,
  params,
});

const getsigns = (payload, cb) => {
  return {
    type: actionTypes.GET_SIGNS_REQUESTED,
    payload,
    cb,
  };
};

const getposition = (payload, cb) => ({
  type: actionTypes.GET_POSITION_REQUESTED,
  payload,
  cb,
});

const getLcrFirst = (payload, cb) => {
  return {
    type: actionTypes.GET_LCR_FIRST_REQUESTED,
    payload,
    cb,
  };
};

const getLcrSecond = (payload, cb) => {
  return {
    type: actionTypes.GET_LCR_SECOND_REQUESTED,
    payload,
    cb,
  };
};

const getLcrThird = (payload, cb) => {
  return {
    type: actionTypes.GET_LCR_THIRD_REQUESTED,
    payload,
    cb,
  };
};

const getFishesBasedOnID = (payload, cb) => {
  return {
    type: actionTypes.GET_FISHES_REQUESTED,
    payload,
    cb,
  };
};

const getWeather = (payload, cb) => {
  return {
    type: actionTypes.GET_WEATHER_REQUESTED,
    payload,
    cb,
  };
};
const getMethod = (payload, cb) => {
  return {
    type: actionTypes.GET_METHOD_REQUESTED,
    payload,
    cb,
  };
};

const savelcrreport = (payload, cb) => {
  return {
    type: actionTypes.SAVE_LCR_REPORT_REQUESTED,
    payload,
    cb,
  };
};
const getlcrlist = (payload, cb) => {
  return {
    type: actionTypes.LCR_LIST_REQUESTED,
    payload,
    cb,
  };
};
export {
  getvideo,
  getNewsFromAdmin,
  getsigns,
  getposition,
  getLcrFirst,
  getLcrSecond,
  getLcrThird,
  getFishesBasedOnID,
  getWeather,
  getMethod,
  savelcrreport,
  getlcrlist,
};
