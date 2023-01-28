import { ReactElement, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { ProductsAPI, REQUEST_URL } from 'api';
import { setDataFromServer } from 'store/reducer/dataFromServer';
import { getDataFromServer } from 'store/selector';

export const MainPage = (): ReactElement => {
  const dispatch = useDispatch();
  const dataFromServer = useSelector(getDataFromServer);

  useEffect(() => {
    ProductsAPI(REQUEST_URL, 'GET').then(res => {
      dispatch(setDataFromServer(res.data));
    });
  }, []);

  return (
    <div>
      {dataFromServer.map(el => (
        <div key={el.id} style={{ background: el.color }}>
          <h1>{el.name}</h1>
          <p>{el.year}</p>
          <p>{el.pantone_value}</p>
        </div>
      ))}
    </div>
  );
};
