import React, { ReactElement } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux';

import { Modal } from 'components/Modal';
import { ElementInfo } from 'components/Table/ElementInfo/ElementInfo';
import { TableRow } from 'components/Table/TableRow/TableRow';
import { getDataFromServer } from 'store/selector';
import { getDetailInfo, getFilterData } from 'store/selector/dataFromServerSelector';
import { getModalStatus } from 'store/selector/modalSelector';

export const Table = (): ReactElement => {
  const dataFromServer = useSelector(getDataFromServer);
  const isModalOpen = useSelector(getModalStatus);
  const detailInfo = useSelector(getDetailInfo);
  const filterData = useSelector(getFilterData);

  return (
    <div>
      <table>
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
        <Modal backBtn>
          <ElementInfo element={detailInfo} />
        </Modal>
      )}
    </div>
  );
};
