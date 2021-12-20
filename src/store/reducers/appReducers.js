import {actionTypes} from '../../utilities/constants';

const initialState = {
  loading: false,
  allVideolist: [],
  newsList: [],
  signarray: [],
  positionarray: [],
  weatherarray: [],
  methodarray: [],
  lcrlistarray: [],
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

    case actionTypes.GET_WEATHER_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_WEATHER_SUCCEEDED:
      return {
        ...state,
        loading: false,
        weatherarray: action.payload,
      };

    case actionTypes.GET_WEATHER_FAIL:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.GET_METHOD_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_METHOD_SUCCEEDED:
      return {
        ...state,
        loading: false,
        methodarray: action.payload,
      };

    case actionTypes.GET_METHOD_FAIL:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.SAVE_LCR_REPORT_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.SAVE_LCR_REPORT_SUCCEEDED:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.SAVE_LCR_REPORT_FAIL:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.LCR_LIST_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.LCR_LIST_SUCCEEDED:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.LCR_LIST_FAIL:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.UPDATE_LCR_REPORT_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.UPDATE_LCR_REPORT_SUCCEEDED:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.UPDATE_LCR_REPORT_FAIL:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.ADD_COMMENT_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.ADD_COMMENT_SUCCEEDED:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.ADD_COMMENT_FAIL:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.GET_LCR_LIKES_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_LCR_LIKES_SUCCEEDED:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.GET_LCR_LIKES_FAIL:
      return {
        ...state,
        loading: false,
      };

      case actionTypes.SAVE_VIDEO_REQUESTED:
        return {
          ...state,
          loading: true,
        };
  
      case actionTypes.SAVE_VIDEO_SUCCEEDED:
        return {
          ...state,
          loading: false,
        };
  
      case actionTypes.SAVE_VIDEO_FAIL:
        return {
          ...state,
          loading: false,
        };

        case actionTypes.SAVE_PHOTO_SHARING_REQUESTED:
          return {
            ...state,
            loading: true,
          };
    
        case actionTypes.SAVE_PHOTO_SHARING_SUCCEEDED:
          return {
            ...state,
            loading: false,
          };
    
        case actionTypes.SAVE_PHOTO_SHARING_FAIL:
          return {
            ...state,
            loading: false,
          };
          
          case actionTypes.TIMELINE_LIST_REQUESTED:
            return {
              ...state,
              loading: true,
            };
      
          case actionTypes.TIMELINE_LIST_SUCCEEDED:
            return {
              ...state,
              loading: false,
            };
      
          case actionTypes.TIMELINE_LIST_FAIL:
            return {
              ...state,
              loading: false,
            };
            case actionTypes.PHOTOSHARE_ADDLIKE_REQUESTED:
              return {
                ...state,
                loading: true,
              };
        
            case actionTypes.PHOTOSHARE_ADDLIKE_SUCCEEDED:
              return {
                ...state,
                loading: false,
              };
        
            case actionTypes.PHOTOSHARE_ADDLIKE_FAIL:
              return {
                ...state,
                loading: false,
              };
               case actionTypes.PHOTO_SHARE_LIKES_REQUESTED:
              return {
                ...state,
                loading: true,
              };
        
            case actionTypes.PHOTO_SHARE_LIKES_SUCCEEDED:
              return {
                ...state,
                loading: false,
              };
        
            case actionTypes.PHOTO_SHARE_LIKES_FAIL:
              return {
                ...state,
                loading: false,
              };
              case actionTypes.PHOTO_ADDCOMMENT_REQUESTED:
                return {
                  ...state,
                  loading: true,
                };
          
              case actionTypes.PHOTO_ADDCOMMENT_SUCCEEDED:
                return {
                  ...state,
                  loading: false,
                };
          
              case actionTypes.PHOTO_ADDCOMMENT_FAIL:
                return {
                  ...state,
                  loading: false,
                };

                case actionTypes.PHOTOSHARE_COMMENT_LIST_REQUESTED:
                  return {
                    ...state,
                    loading: true,
                  };
            
                case actionTypes.PHOTOSHARE_COMMENT_LIST_SUCCEEDED:
                  return {
                    ...state,
                    loading: false,
                  };
            
                case actionTypes.PHOTOSHARE_COMMENT_LIST_FAIL:
                  return {
                    ...state,
                    loading: false,
                  };
    default:
      return state;
  }
};
