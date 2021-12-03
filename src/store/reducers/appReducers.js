import {actionTypes} from '../../utilities/constants';

const initialState = {
  loading: false,
  allVideolist: [],
  newsList: [],
  signarray:[],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_VIDEO_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_VIDEO_SUCCEEDED:
      return {
        ...state,
        loading: false,
        allVideolist: action.payload,
      };

    case actionTypes.GET_VIDEO_FAIL:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.GET_NEWS_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_NEWS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        newsList: action.payload,
      };

    case actionTypes.GET_NEWS_FAIL:
      return {
        ...state,
        loading: false,
      };

      case actionTypes.GET_SIGNS_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_SIGNS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        signarray: action.payload,
      };

    case actionTypes.GET_SIGNS_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
