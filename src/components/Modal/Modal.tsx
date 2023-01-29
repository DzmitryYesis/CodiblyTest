import React, { ReactElement } from 'react';

import ReactDOM from 'react-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch } from 'react-redux';

import { Button } from 'components/Button/Button';
import { Close } from 'components/Icon/Close';
import classes from 'components/Modal/Modal.module.scss';
import { setClose } from 'store/reducer/modal';
import { TIconProps } from 'types';

type TModal = {
  onCloseModal: () => void;
  children: React.ReactNode;
  closeBtn: boolean;
  Icon: React.FC<Partial<TIconProps>>;
  width: number;
  height: number;
};

export const Modal = ({
  children,
  onCloseModal,
  closeBtn = true,
  Icon,
  width,
  height,
}: Partial<TModal>): ReactElement => {
  const dispatch = useDispatch();

  const closeModal = (): void => {
    dispatch(setClose());
    document.body.style.overflow = 'auto';
    if (onCloseModal) onCloseModal();
  };
  return ReactDOM.createPortal(
    <div>
      <div className={classes.overlap} />
      <div className={classes.modal_container}>
        {closeBtn && (
          <Button onClick={closeModal} className={classes.close_btn}>
            <Close size={20} />
          </Button>
        )}
        {Icon && (
          <div className={classes.icon_img}>
            <Icon width={width} height={height} />
          </div>
        )}
        <div>{children}</div>
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement,
  );
};
