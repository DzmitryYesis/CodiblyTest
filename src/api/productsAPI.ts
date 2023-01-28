import { TResponseType } from 'types';

export const ProductsAPI = (url: string, method: string): Promise<TResponseType> =>
  fetch(url, {
    method,
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response: Response) => Promise.resolve(response.json()));
