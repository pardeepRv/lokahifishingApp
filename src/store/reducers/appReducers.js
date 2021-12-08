import {actionTypes} from '../../utilities/constants';

const initialState = {
  loading: false,
  allVideolist: [],
  newsList: [],
  signarray: [],
  positionarray: [],
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
    case actionTypes.GET_POSITION_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_POSITION_SUCCEEDED:
      return {
        ...state,
        loading: false,
        positionarray: action.payload,
      };

    case actionTypes.GET_POSITION_FAIL:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.GET_LCR_FIRST_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_LCR_FIRST_SUCCEEDED:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.GET_LCR_FIRST_FAIL:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.GET_LCR_SECOND_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_LCR_SECOND_SUCCEEDED:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.GET_LCR_SECOND_FAIL:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.GET_LCR_THIRD_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_LCR_THIRD_SUCCEEDED:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.GET_LCR_THIRD_FAIL:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.GET_FISHES_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_FISHES_SUCCEEDED:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.GET_FISHES_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
