import { createSlice } from '@reduxjs/toolkit';

import { TReducersDataFromServerType } from 'types';

const initialState: TReducersDataFromServerType = {
  data: [],
};

const dataFromServer = createSlice({
  name: 'dataFromServer',
  initialState,
  reducers: {
    setDataFromServer(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setDataFromServer } = dataFromServer.actions;

export default dataFromServer.reducer;
