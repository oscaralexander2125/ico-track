import { META_COIN_ACTION_TYPES } from "./metaCoins.types";
const INITIAL_STATE = {
  currentMetaCoins: [],
  isLoading: false,
  error: null,
};

export const metaCoinsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case META_COIN_ACTION_TYPES.FETCH_COINS_START:
      return { ...state, isLoading: true };
    case META_COIN_ACTION_TYPES.FETCH_COINS_SUCCESS:
      return { ...state, currentMetaCoins: payload, isLoading: false };
    case META_COIN_ACTION_TYPES.FETCH_COINS_FAILED:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};
