import { TResponseDataType } from 'types/responseTypes';

export type TReducersDataFromServerType = {
  data: TResponseDataType[];
  dataForDetail: TResponseDataType;
  filterData: TResponseDataType;
};

export type TModalState = {
  modalOpen: boolean;
};

export type TMainPageStateType = {
  isClientError: boolean;
  isServerError: boolean;
  isFocus: boolean;
};
