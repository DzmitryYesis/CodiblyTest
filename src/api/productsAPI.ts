import { TResponseType, TFilterResponseType } from 'types';

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
  }).then((response: Response) => {
    const { status } = response;
    return Promise.resolve(response.json()).then(json => ({ json, status }));
  });

export const FilterAPI = (id: string, method: string): Promise<TFilterResponseType> =>
  fetch(`https://reqres.in/api/products?id=${id}`, {
    method,
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response: Response) => {
    const { status } = response;
    return Promise.resolve(response.json()).then(json => ({ json, status }));
  });
