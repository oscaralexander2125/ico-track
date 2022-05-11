import { COIN_INFO_ACTION_TYPES } from "./coin-info.types";

const INITIAL_STATE = {
  currentCoin: {},
  isLoading: false,
  error: null,
};

export const coinInfoReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case COIN_INFO_ACTION_TYPES.FETCH_COIN_INFO_START:
      return { ...state, isLoading: true };
    case COIN_INFO_ACTION_TYPES.FETCH_COIN_INFO_SUCCESS:
      return { ...state, currentCoin: payload, isLoading: false };
    case COIN_INFO_ACTION_TYPES.FETCH_COIN_INFO_FAILED:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};
