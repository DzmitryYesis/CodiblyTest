export type TResponseType = {
  json: TResponsePageType;
  status: number;
};

export type TResponsePageType = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: TResponseDataType[];
};

export type TResponseDataType = {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
};

export type TFilterResponseType = {
  json: {
    data: TResponseDataType;
  };
  status: number;
};
