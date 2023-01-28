export type TResponseType = {
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
