import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from "../../utils/reducer/reducer.utils";
import { getDocumentData } from "../../utils/firebase/firebase.utils";

export const setCurrentUser = (user) => {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};

export const fetchCurrentUserCoinsStart = () => {
  return createAction(USER_ACTION_TYPES.FETCH_CURRENT_USER_COINS_START);
};

export const fetchCurrentUserCoinsSuccess = (coin) => {
  return createAction(USER_ACTION_TYPES.FETCH_CURRENT_USER_COINS_SUCCESS, coin);
};

export const fetchCurrentUserCoinsFailed = (error) => {
  return createAction(USER_ACTION_TYPES.FETCH_CURRENT_USER_COINS_SUCCESS, error);
};

export const fetchUserCoinsAsync = (user) => async (dispatch) => {
  dispatch(fetchCurrentUserCoinsStart());

  try {
    const newUserInfo = await getDocumentData(user);
    dispatch(fetchCurrentUserCoinsSuccess(newUserInfo.coins));
  } catch (error) {
    dispatch(fetchCurrentUserCoinsFailed(error));
  }
};
