import { ChangeEvent, ReactElement, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { ProductsAPI, REQUEST_URL } from 'api';
import { setDataFromServer } from 'store/reducer/dataFromServer';
import { getDataFromServer } from 'store/selector';
import { TResponseDataType } from 'types';

export const MainPage = (): ReactElement => {
  const dispatch = useDispatch();
  const dataFromServer = useSelector(getDataFromServer);

  const [value, setValue] = useState<string>();
  const [filterData, setFilterData] = useState<TResponseDataType[]>();
  console.log(filterData);

  const filterHandle = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value.replace(/[^\d]/g, ''));
  };

  useEffect(() => {
    ProductsAPI(REQUEST_URL, 'GET').then(res => {
      dispatch(setDataFromServer(res.data));
    });
  }, []);

  useEffect(() => {
    if (value) setFilterData(dataFromServer.filter(el => el.id === +value));
  }, [value]);

  return (
    <div>
      <input value={value ?? ''} onChange={filterHandle} />
      <table>
        <tbody>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Year</th>
          </tr>
          {value && filterData
            ? filterData.map(el => (
                <tr key={el.id} style={{ background: el.color }}>
                  <td>{el.name}</td>
                  <td>{el.year}</td>
                  <td>{el.pantone_value}</td>
                </tr>
              ))
            : dataFromServer.map(el => (
                <tr key={el.id} style={{ background: el.color }}>
                  <td>{el.name}</td>
                  <td>{el.year}</td>
                  <td>{el.pantone_value}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};
