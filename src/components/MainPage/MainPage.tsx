import { ChangeEvent, ReactElement, useEffect, useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSearchParams } from 'react-router-dom';

import classes from './MainPage.module.scss';

import { ProductsAPI, FilterAPI } from 'api';
import { Button, ClientError, ServerError, FailedIcon, Modal, Table } from 'components';
import { setDataFromServer, setFilterData } from 'store/reducer/dataFromServer';
import {
  setIsClientError,
  setIsFocus,
  setIsServerError,
} from 'store/reducer/mainPageState';
import { getIsClientError, getIsFocus, getIsServerError } from 'store/selector';

const enum NUMBER {
  ONE = 1,
  THREE = 3,
  TWO_HUNDRED = 200,
  FOUR_ZERO_FOUR = 404,
}

export const MainPage = (): ReactElement => {
  const dispatch = useDispatch();

  const isFocus = useSelector(getIsFocus);
  const isClientError = useSelector(getIsClientError);
  const isServerError = useSelector(getIsServerError);

  const [searchParams, setSearchParams] = useSearchParams();
  const browserPage = searchParams.get('page') || '1';
  const filterId = searchParams.get('id') || '';

  const [page, setPage] = useState<number>(Number(browserPage));

  const filterHandle = (e: ChangeEvent<HTMLInputElement>): void => {
    const id = e.target.value.replace(/[^\d]/g, '');
    if (id) {
      setSearchParams({ id });
      FilterAPI(id, 'GET').then(res => {
        if (res.status === NUMBER.TWO_HUNDRED) {
          dispatch(setFilterData(res.json.data));
        } else if (res.status === NUMBER.FOUR_ZERO_FOUR) {
          dispatch(setIsClientError(true));
        } else {
          dispatch(setIsServerError(true));
        }
      });
    } else {
      setSearchParams({ page: page.toString(), per_page: '5' });
      ProductsAPI(page.toString(), '5', 'GET').then(res => {
        dispatch(setFilterData({}));
        dispatch(setDataFromServer(res.json.data));
      });
    }
  };

  const onFocusHandle = (): void => {
    dispatch(setIsFocus(true));
  };
  const onBlurHandle = (): void => {
    dispatch(setIsFocus(false));
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
        dispatch(setFilterData(res.json.data));
      });
    } else {
      setSearchParams({ page: page.toString(), per_page: '5' });
      ProductsAPI(page.toString(), '5', 'GET').then(res => {
        dispatch(setDataFromServer(res.json.data));
      });
    }
  }, [page]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.input_wrapper}>
        <p className={classes.label}>ID:</p>
        <input
          placeholder={isFocus ? '' : 'Enter ID number'}
          className={classes.filter_input}
          value={filterId}
          onChange={filterHandle}
          onFocus={onFocusHandle}
          onBlur={onBlurHandle}
        />
      </div>
      <Table />
      <div className={classes.button_group_wrapper}>
        <Button
          className={classes.button}
          disabled={page === NUMBER.ONE}
          onClick={previousPage}
        >
          Previous
        </Button>
        <h1>{page}</h1>
        <Button
          className={classes.button}
          disabled={page === NUMBER.THREE}
          onClick={nextPage}
        >
          Next
        </Button>
      </div>
      {isClientError && (
        <Modal Icon={FailedIcon} onCloseModal={() => dispatch(setIsClientError(false))}>
          <ClientError id={filterId} />
        </Modal>
      )}
      {isServerError && (
        <Modal Icon={FailedIcon} onCloseModal={() => dispatch(setIsServerError(false))}>
          <ServerError />
        </Modal>
      )}
    </div>
  );
};
