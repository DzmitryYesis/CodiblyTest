import { RootState } from 'store/store';
import { TResponseDataType } from 'types';

export const getDataFromServer = (state: RootState): TResponseDataType[] =>
  state.dataFromServer.data;

export const getDetailInfo = (state: RootState): TResponseDataType =>
  state.dataFromServer.dataForDetail;

export const getFilterData = (state: RootState): TResponseDataType =>
  state.dataFromServer.filterData;
