import { RootState } from 'store/store';
import { TResponseDataType } from 'types';

export const getDataFromServer = (state: RootState): TResponseDataType[] =>
  state.dataFromServer.data;
