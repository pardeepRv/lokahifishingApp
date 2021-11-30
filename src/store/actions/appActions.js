import {actionTypes} from '../../utilities/constants';

const getvideo = params => ({
  type: actionTypes.GET_VIDEO_REQUESTED,
  params,
});

export {getvideo};
