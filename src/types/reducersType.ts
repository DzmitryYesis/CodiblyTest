import { TResponseDataType } from 'types/responseTypes';

export type TReducersDataFromServerType = {
  data: TResponseDataType[];
  dataForDetail: TResponseDataType;
  filterData: TResponseDataType;
};
