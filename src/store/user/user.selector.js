import { createSelector } from "reselect";

export const selectCurrentUser = (state) => state.user.currentUser;

export const selectCurrentUserCoins = (state) => state.user.currentUserCoins;

export const loadingState = (state) => state.user.isLoading;

//transformation business logic happens in this file
