import { createSelector } from "reselect";

export const selectCurrentReducer = (state) => state.metaCoins;

export const selectCurrentCoins = createSelector(
  [selectCurrentReducer],
  (coinSlice) => coinSlice.currentMetaCoins
);
