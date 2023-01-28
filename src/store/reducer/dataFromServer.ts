import { createSlice } from '@reduxjs/toolkit';

import { TReducersDataFromServerType, TResponseDataType } from 'types';

const initialState: TReducersDataFromServerType = {
  data: [],
  dataForDetail: {} as TResponseDataType,
  filterData: {} as TResponseDataType,
};

const dataFromServer = createSlice({
  name: 'dataFromServer',
  initialState,
  reducers: {
    setDataFromServer(state, action) {
      state.data = action.payload;
    },
    setDetailInfo(state, action) {
      state.dataForDetail = action.payload;
    },
    setFilterData(state, action) {
      state.filterData = action.payload;
    },
  },
});

export const { setDataFromServer, setDetailInfo, setFilterData } = dataFromServer.actions;

export default dataFromServer.reducer;
