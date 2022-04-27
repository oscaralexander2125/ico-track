import { META_COIN_ACTION_TYPES } from "./metaCoins.types";
const INITIAL_STATE = {
  currentMetaCoins: [],
};

export const metaCoinsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case META_COIN_ACTION_TYPES.SET_CURRENT_COINS:
      return {...state, currentMetaCoins: payload};
      default:
        return state
  }
};
