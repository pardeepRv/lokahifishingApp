import {actionTypes} from '../../utilities/constants';

const getvideo = params => ({
  type: actionTypes.GET_VIDEO_REQUESTED,
  params,
});

const getNewsFromAdmin = params => ({
  type: actionTypes.GET_NEWS_REQUESTED,
  params,
});

export {getvideo, getNewsFromAdmin};
