import { COIN_INFO_ACTION_TYPES } from "./coin-info.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const fetchCoinInfoStart = () =>
  createAction(COIN_INFO_ACTION_TYPES.FETCH_COIN_INFO_START);

export const fetchCoinInfoSuccess = (coin) =>
  createAction(COIN_INFO_ACTION_TYPES.FETCH_COIN_INFO_SUCCESS, coin);

export const fetchCoinInfoFailed = (error) =>
  createAction(COIN_INFO_ACTION_TYPES.FETCH_COIN_INFO_FAILED, error);

export const fetchCoinInfoAsync = (urlWithId) => async (dispatch) => {
  dispatch(fetchCoinInfoStart());

  try {
    fetch(urlWithId)
      .then((res) => res.json())
      .then((ico) => {
        dispatch(fetchCoinInfoSuccess(ico));
      });
  } catch (error) {
    dispatch(fetchCoinInfoFailed());
  }
};
