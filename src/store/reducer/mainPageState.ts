import { createSlice } from '@reduxjs/toolkit';

import { TMainPageStateType } from 'types';

const initialState: TMainPageStateType = {
  isClientError: false,
  isServerError: false,
  isFocus: false,
};

const mainPageData = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {
    setIsClientError(state, action) {
      state.isClientError = action.payload;
    },
    setIsServerError(state, action) {
      state.isServerError = action.payload;
    },
    setIsFocus(state, action) {
      state.isFocus = action.payload;
    },
  },
});

export const { setIsClientError, setIsServerError, setIsFocus } = mainPageData.actions;

export default mainPageData.reducer;
