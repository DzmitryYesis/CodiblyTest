import { ChangeEvent, ReactElement, useEffect, useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSearchParams } from 'react-router-dom';

import { ProductsAPI } from 'api';
import { FilterAPI } from 'api/productsAPI';
import { Table } from 'components/Table/Table';
import { setDataFromServer, setFilterData } from 'store/reducer/dataFromServer';

const enum NUMBER {
  ONE = 1,
  TWO = 2,
  THREE = 3,
}

export const MainPage = (): ReactElement => {
  const dispatch = useDispatch();
  /* const filerData = useSelector(getFilterData); */
  const [searchParams, setSearchParams] = useSearchParams();
  const browserPage = searchParams.get('page') || '1';
  /*  const [value, setValue] = useState<string>(); */
  const [page, setPage] = useState<number>(Number(browserPage));

  /* const pageParam = searchParams.get('page'); */
  const filterId = searchParams.get('id') || '';

  const filterHandle = (e: ChangeEvent<HTMLInputElement>): void => {
    const id = e.target.value.replace(/[^\d]/g, '');
    if (id) {
      setSearchParams({ id });
      FilterAPI(id, 'GET').then(res => {
        dispatch(setFilterData(res.data));
      });
    } else {
      setSearchParams({ page: page.toString(), per_page: '5' });
      ProductsAPI(page.toString(), '5', 'GET').then(res => {
        dispatch(setFilterData({}));
        dispatch(setDataFromServer(res.data));
      });
    }
  };

  const nextPage = (): void => {
    if (page < NUMBER.THREE) {
      setPage(page + NUMBER.ONE);
    } else {
      setPage(NUMBER.THREE);
    }
  };

  const previousPage = (): void => {
    if (page > NUMBER.ONE) {
      setPage(page - NUMBER.ONE);
    } else {
      setPage(NUMBER.ONE);
    }
  };

  useEffect(() => {
    if (filterId) {
      setSearchParams({ id: filterId });
      FilterAPI(filterId, 'GET').then(res => {
        dispatch(setFilterData(res.data));
      });
    } else {
      setSearchParams({ page: page.toString(), per_page: '5' });
      ProductsAPI(page.toString(), '5', 'GET').then(res => {
        dispatch(setDataFromServer(res.data));
      });
    }
  }, [page]);

  return (
    <div>
      <input value={filterId} onChange={filterHandle} />
      <Table />
      <button type="button" disabled={page === NUMBER.ONE} onClick={previousPage}>
        Previous
      </button>
      <button type="button" disabled={page === NUMBER.THREE} onClick={nextPage}>
        Next
      </button>
    </div>
  );
};
