import { actionTypes } from '../../utilities/constants';

const initialState = {
  loading: false,
  allVideolist: [],
  newsList: [],
  signarray: [],
  positionarray: [],
  weatherarray: [],
  methodarray: [],
  lcrlistarray: [],
  fishesArr: [],
  rankinglist : [],
  filterlist :[],
  pagelist:[],
  memberlist:[],
  memberlistdata:[],
  linkslist: [],
  questionlist:[],
  loadmore:[],
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
        // newsList: action.payload,
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
        signarray:[],
        positionarray: [],
        weatherarray: [],
        methodarray: [],
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
    case actionTypes.LEADERBOARD_FISH_LIST_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.LEADERBOARD_FISH_LIST_SUCCEEDED:
      return {
        ...state,
        loading: false,
        fishesArr: action.payload
      };

    case actionTypes.LEADERBOARD_FISH_LIST_FAIL:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.LEADERBOARD_RANKING_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.LEADERBOARD_RANKING_SUCCEEDED:
      return {
        ...state,
        loading: false,
        rankinglist: action.payload
      };

    case actionTypes.LEADERBOARD_RANKING_FAIL:
      return {
        ...state,
        loading: false,
      };
      case actionTypes.LEADERBOARD_FILTER_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.LEADERBOARD_FILTER_SUCCEEDED:
      return {
        ...state,
        loading: false,
       filterlist: action.payload

      };

    case actionTypes.LEADERBOARD_FILTER_FAIL:
      return {
        ...state,
        loading: false,
      };
      case actionTypes.TOURNAMENT_LISTING_REQUESTED:
        return {
          ...state,
          loading: true,
        };
  
      case actionTypes.TOURNAMENT_LISTING_SUCCEEDED:
        return {
          ...state,
          loading: false,
        };
  
      case actionTypes.TOURNAMENT_LISTING_FAIL:
        return {
          ...state,
          loading: false,
        };

        case actionTypes.TERMS_AND_CONDITION_REQUESTED:
        return {
          ...state,
          loading: true,
        };
  
      case actionTypes.TERMS_AND_CONDITION_SUCCEEDED:
        return {
          ...state,
          loading: false,
        pagelist: action.payload,
        };
  
      case actionTypes.TERMS_AND_CONDITION_FAIL:
        return {
          ...state,
          loading: false,
        };
        case actionTypes.MEMBER_LISTING_REQUESTED:
          return {
            ...state,
            loading: true,
          };
    
        case actionTypes.MEMBER_LISTING_SUCCEEDED:
          return {
            ...state,
            loading: false,
            memberlist: action.payload,
          };
    
        case actionTypes.MEMBER_LISTING_FAIL:
          return {
            ...state,
            loading: false,
          };
          case actionTypes.SEND_FRIEND_REQUESTS_REQUESTED:
            return {
              ...state,
              loading: true,
            };
          case actionTypes.SEND_FRIEND_REQUESTS_SUCCEEDED:
            return {
              ...state,
              loading: false,
            };
          case actionTypes.SEND_FRIEND_REQUESTS_FAIL:
            return {
              ...state,
              loading: false,
            };
            case actionTypes.UNBLOCK_USER_REQUESTED:
              return {
                ...state,
                loading: true,
              };
            case actionTypes.UNBLOCK_USER_SUCCEEDED:
              return {
                ...state,
                loading: false,
              };
            case actionTypes.UNBLOCK_USER_FAIL:
              return {
                ...state,
                loading: false,
              };
              case actionTypes.MEMBER_LOADMORE_REQUESTED:
                return {
                  ...state,
                  loading: true,
                };
          
              case actionTypes.MEMBER_LOADMORE_SUCCEEDED:
                return {
                  ...state,
                  loading: false,
                  memberlistdata: action.payload,
                };
          
              case actionTypes.MEMBER_LOADMORE_FAIL:
                return {
                  ...state,
                  loading: false,
                };

                case actionTypes.SAVE_LOADMORE_REQUESTED:
                  return {
                    ...state,
                    loading: true,
                  };
            
                case actionTypes.SAVE_LOADMORE_SUCCEEDED:
                  return {
                    ...state,
                    loading: false,
                    loadmore : action.payload,
                  };
            
                case actionTypes.SAVE_LOADMORE_FAIL:
                  return {
                    ...state,
                    loading: false,
                  };


                case actionTypes.SAVE_PHOTOSHARING_REQUESTED:
                  return {
                    ...state,
                    loading: true,
                  };
            
                case actionTypes.SAVE_PHOTOSHARING_SUCCEEDED:
                  return {
                    ...state,
                    loading: false,
                    loadmore : action.payload,
                  };
            
                case actionTypes.SAVE_PHOTOSHARING_FAIL:
                  return {
                    ...state,
                    loading: false,
                  };

                case actionTypes.IMPORTANT_LINKS_REQUESTED:
                  return {
                    ...state,
                    loading: true,
                  };
            
                case actionTypes.IMPORTANT_LINKS_SUCCEEDED:
                  return {
                    ...state,
                    loading: false,
                    linkslist: action.payload,
                  };
            
                case actionTypes.IMPORTANT_LINKS_FAIL:
                  return {
                    ...state,
                    loading: false,
                  };
                  case actionTypes.SURVEY_QUESTION_REQUESTED:
                    return {
                      ...state,
                      loading: true,
                    };
                  case actionTypes.SURVEY_QUESTION_SUCCEEDED:
                    return {
                      ...state,
                      loading: false,
                      questionlist: action.payload,
                    };           
                  case actionTypes.SURVEY_QUESTION_FAIL:
                    return {
                      ...state,
                      loading: false,
                    };
                    case actionTypes.SAVE_SURVEY_QUESTION_REQUESTED:
                    return {
                      ...state,
                      loading: true,
                    };
                  case actionTypes.SAVE_SURVEY_QUESTION_SUCCEEDED:
                    return {
                      ...state,
                      loading: false,
                     
                    };           
                  case actionTypes.SAVE_SURVEY_QUESTION_FAIL:
                    return {
                      ...state,
                      loading: false,
                    };
    default:
      return state;
  }
};
