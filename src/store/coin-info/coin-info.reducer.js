import { COIN_INFO_ACTION_TYPES } from "./coin-info.types";

const INITIAL_STATE = {
  currentCoin: {},
};

export const coinInfoReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case COIN_INFO_ACTION_TYPES.SET_COIN_INFO:
      return { ...state, currentCoin: payload };
    default:
      return state;
  }
};
