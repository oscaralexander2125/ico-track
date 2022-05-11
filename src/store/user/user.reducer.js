import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  currentUserCoins: [],
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    case USER_ACTION_TYPES.FETCH_CURRENT_USER_COINS_START:
      return { ...state, isLoading: true };
    case USER_ACTION_TYPES.FETCH_CURRENT_USER_COINS_SUCCESS:
      return { ...state, currentUserCoins: payload, isLoading: false };
    case USER_ACTION_TYPES.FETCH_CURRENT_USER_COINS_FAILED:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};
