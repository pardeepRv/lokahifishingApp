import AsyncStorage from '@react-native-async-storage/async-storage';

import {USER_DATA} from '../constants/otherConstants';

const getLocalUserData = () =>
  AsyncStorage.getItem(USER_DATA).then((data) => JSON.parse(data));

const setLocalUserData = (data) =>
  AsyncStorage.setItem(USER_DATA, JSON.stringify(data));

const deleteUserDataFromLocal = () => AsyncStorage.removeItem(USER_DATA);

const extractUserDataFromDBResponse = (userData = {}, defaultValues) => {
  debugger;
  const {
    address,
    admin_id,
    created_at,
    days,
    device_type,
    dob,
    email,
    fcm_id,
    gender,
    goal_weight,
    id,
    joining_date_weight,
    latitude,
    longitude,
    mobile,
    name,
    status,
    token,
    updated_at,
    username,
    weight_type,
  } = userData;

  return {
    address,
    admin_id,
    created_at,
    days,
    device_type,
    dob,
    email,
    fcm_id,
    gender,
    goal_weight,
    id,
    joining_date_weight,
    latitude,
    longitude,
    mobile,
    name,
    status,
    token,
    updated_at,
    username,
    weight_type,
    ...defaultValues,
  };
};

export {
  getLocalUserData,
  setLocalUserData,
  deleteUserDataFromLocal,
  extractUserDataFromDBResponse,
};
