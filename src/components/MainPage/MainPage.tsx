import { ReactElement, useEffect, useState } from 'react';

import { ProductsAPI, REQUEST_URL, TResponseDataType } from 'api';

export const MainPage = (): ReactElement => {
  const [state, setState] = useState<TResponseDataType[]>();
  useEffect(() => {
    ProductsAPI(REQUEST_URL, 'GET').then(res => {
      setState(res.data);
    });
  }, []);

  return (
    <div>
      {state?.map(el => (
        <div key={el.id} style={{ background: el.color }}>
          <h1>{el.name}</h1>
          <p>{el.year}</p>
          <p>{el.pantone_value}</p>
        </div>
      ))}
    </div>
  );
};
