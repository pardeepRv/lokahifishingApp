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
const updatelcrreport = (payload, cb) => {
  return {
    type: actionTypes.UPDATE_LCR_REPORT_REQUESTED,
    payload,
    cb,
  };
};

const addComment = (params, cb) => {
  return {
    type: actionTypes.ADD_COMMENT_REQUESTED,
    params,
    cb,
  };
};

const getLcrComments = (params, cb) => {
  return {
    type: actionTypes.GET_LCR_COMMENTS_REQUESTED,
    params,
    cb,
  };
};

const getLcrLikes = (params, cb) => {
  return {
    type: actionTypes.GET_LCR_LIKES_REQUESTED,
    params,
    cb,
  };
};

const addLikeUnlike = (params, cb) => {
  return {
    type: actionTypes.ADD_LCR_LIKE_REQUESTED,
    params,
    cb,
  };
};

const savevideo = (params, cb) => {
  return {
    type: actionTypes.SAVE_VIDEO_REQUESTED,
    params,
    cb,
  };
};
const savephoto = (params, cb) => {
  return {
    type: actionTypes.SAVE_PHOTO_SHARING_REQUESTED,
    params,
    cb,
  };
};

const savetimelinelist = (params, cb) => {
  return {
    type: actionTypes.TIMELINE_LIST_REQUESTED,
    params,
    cb,
  };
};

const addlikeunlikeohothsaring = (params, cb) => {
  return {
    type: actionTypes.PHOTOSHARE_ADDLIKE_REQUESTED,
    params,
    cb,
  };
};
const getphotosharelikes = (params, cb) => {
  return {
    type: actionTypes.PHOTO_SHARE_LIKES_REQUESTED,
    params,
    cb,
  };
};

const photoaddcomment = (params, cb) => {
  return {
    type: actionTypes.PHOTO_ADDCOMMENT_REQUESTED,
    params,
    cb,
  };
};

const photoaddcommentlist = (params, cb) => {
  return {
    type: actionTypes.PHOTOSHARE_COMMENT_LIST_REQUESTED,
    params,
    cb,
  };
};

const leaderboardfishlist = (params, cb) => {
  return {
    type: actionTypes.LEADERBOARD_FISH_LIST_REQUESTED,
    params,
    cb,
  };
};

const leaderboardranking = (params, cb) => {
  return {
    type: actionTypes.LEADERBOARD_RANKING_REQUESTED,
    params,
    cb,
  };
};

const leaderboardfilter = (params, cb) => {
  return {
    type: actionTypes.LEADERBOARD_FILTER_REQUESTED,
    params,
    cb,
  };
};

const tournamentlisting = (params, cb) => {
  return {
    type: actionTypes.TOURNAMENT_LISTING_REQUESTED,
    params,
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
  updatelcrreport,
  addComment,
  getLcrComments,
  getLcrLikes,
  addLikeUnlike,
  savevideo,
  savephoto,
  savetimelinelist,
  addlikeunlikeohothsaring,
  getphotosharelikes,
  photoaddcomment,
  photoaddcommentlist,
  leaderboardfishlist,
  leaderboardranking,
  leaderboardfilter,
  tournamentlisting
};
