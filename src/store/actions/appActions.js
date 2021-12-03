import { actionTypes } from '../../utilities/constants';

const getvideo = params => ({
  type: actionTypes.GET_VIDEO_REQUESTED,
  params,
});

const getNewsFromAdmin = params => ({
  type: actionTypes.GET_NEWS_REQUESTED,
  params,
});

const getsigns = (payload, cb) => {
  return ({
    type: actionTypes.GET_SIGNS_REQUESTED,
    payload,
    cb
  })
};

export { getvideo, getNewsFromAdmin, getsigns };
