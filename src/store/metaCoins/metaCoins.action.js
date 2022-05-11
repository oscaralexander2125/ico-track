import { META_COIN_ACTION_TYPES } from "./metaCoins.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const fetchCoinsStart = () =>
  createAction(META_COIN_ACTION_TYPES.FETCH_COINS_START);

export const fetchCoinsSuccess = (coins) =>
  createAction(META_COIN_ACTION_TYPES.FETCH_COINS_SUCCESS, coins);

export const fetchCoinsFailed = (error) =>
  createAction(META_COIN_ACTION_TYPES.FETCH_COINS_FAILED, error);

export const fetchCoinsAsync = (metaVerseUrl) => async (dispatch) => {
  dispatch(fetchCoinsStart());

  try {
    fetch(metaVerseUrl)
      .then((res) => res.json())
      .then((response) => {
        dispatch(fetchCoinsSuccess(response));
      });
  } catch (error) {
    dispatch(fetchCoinsFailed(error));
  }
};
