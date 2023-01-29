import { RootState } from 'store/store';

export const getIsServerError = (state: RootState): boolean =>
  state.mainPage.isServerError;

export const getIsClientError = (state: RootState): boolean =>
  state.mainPage.isClientError;

export const getIsFocus = (state: RootState): boolean => state.mainPage.isFocus;
