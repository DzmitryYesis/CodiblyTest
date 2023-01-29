import React, { ReactElement } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux';

import { ElementInfo } from './ElementInfo';
import classes from './Table.module.scss';
import { TableRow } from './TableRow';

import { Modal } from 'components';
import {
  getDataFromServer,
  getDetailInfo,
  getFilterData,
  getModalStatus,
} from 'store/selector';

export const Table = (): ReactElement => {
  const dataFromServer = useSelector(getDataFromServer);
  const isModalOpen = useSelector(getModalStatus);
  const detailInfo = useSelector(getDetailInfo);
  const filterData = useSelector(getFilterData);

  return (
    <div>
      <table className={classes.table}>
        <tbody>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Year</th>
          </tr>
          {filterData.id ? (
            <TableRow element={filterData} />
          ) : (
            dataFromServer.map(el => <TableRow element={el} key={el.id} />)
          )}
        </tbody>
      </table>
      {isModalOpen && (
        <Modal>
          <ElementInfo element={detailInfo} />
        </Modal>
      )}
    </div>
  );
};
