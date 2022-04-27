import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { metaCoinsReducer } from "./metaCoins/metaCoins.reducer";
import { coinInfoReducer } from "./coin-info/coin-info.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  metaCoins: metaCoinsReducer,
  coinInfo: coinInfoReducer,
});
