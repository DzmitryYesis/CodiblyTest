import { TResponseType } from 'types';
import { TFilterResponseType } from 'types/responseTypes';

export const ProductsAPI = (
  page: string,
  perPage: string,
  method: string,
): Promise<TResponseType> =>
  fetch(`https://reqres.in/api/products?page=${page}&per_page=${perPage}`, {
    method,
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response: Response) => Promise.resolve(response.json()));

export const FilterAPI = (id: string, method: string): Promise<TFilterResponseType> =>
  fetch(`https://reqres.in/api/products?id=${id}`, {
    method,
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response: Response) => Promise.resolve(response.json()));
