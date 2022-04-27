import { META_COIN_ACTION_TYPES } from "./metaCoins.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCurrentCoins = (coins) => {
  return createAction(META_COIN_ACTION_TYPES.SET_CURRENT_COINS, coins)
}