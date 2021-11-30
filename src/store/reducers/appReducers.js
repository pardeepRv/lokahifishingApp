import {actionTypes} from '../../utilities/constants';

const initialState = {
  loading: false,

  allVideolist: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_VIDEO_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_VIDEO_SUCCEEDED:
      console.log(action, 'in get VEDIO reducer>>>>>>>>');
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

    default:
      return state;
  }
};
