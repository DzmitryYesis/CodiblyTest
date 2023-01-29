import React, { ReactElement } from 'react';

import { useDispatch } from 'react-redux';

import { setDetailInfo } from 'store/reducer/dataFromServer';
import { setOpen } from 'store/reducer/modal';
import { TElementType } from 'types';

export const TableRow = ({ element }: TElementType): ReactElement => {
  const dispatch = useDispatch();

  const onClickRowHandle = (): void => {
    dispatch(setDetailInfo(element));
    dispatch(setOpen());
  };

  return (
    <tr
      style={{ background: element.color, cursor: 'pointer' }}
      onClick={onClickRowHandle}
    >
      <td>{element.name}</td>
      <td>{element.year}</td>
      <td>{element.pantone_value}</td>
    </tr>
  );
};
