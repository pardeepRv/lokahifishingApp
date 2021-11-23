import {actionTypes} from '../../utilities/constants';

const initialState = {
  loading: false,
  allFriendsRequest: [],
  allFriendslist: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FRIEND_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_FRIEND_SUCCEEDED:
      return {
        ...state,
        loading: false,
        allFriendsRequest: action.payload,
      };

    case actionTypes.GET_FRIEND_FAIL:
      return {
        ...state,
        loading: false,
      };
      case actionTypes.GET_FRIEND_LIST_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_FRIEND_LIST_SUCCEEDED:
      return {
        ...state,
        loading: false,
        allFriendslist: action.payload,
      };

    case actionTypes.GET_FRIEND_LIST_FAIL:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.RESPOND_FRIEND_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.RESPOND_FRIEND_SUCCEEDED:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.RESPOND_FRIEND_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
