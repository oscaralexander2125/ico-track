import { COIN_INFO_ACTION_TYPES } from "./coin-info.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCoinInfo = (coin) =>
  createAction(COIN_INFO_ACTION_TYPES.SET_COIN_INFO, coin);
