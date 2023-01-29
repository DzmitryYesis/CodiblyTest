import React, { ReactElement } from 'react';

import styles from 'components/Button/Button.module.scss';

type TButtonPropsType = {
  onClick: () => void;
  children: React.ReactNode;
  className: string;
  disabled: boolean;
};

export const Button = ({
  disabled,
  onClick,
  children,
  className = '',
}: Partial<TButtonPropsType>): ReactElement => (
  <button type="button" onClick={onClick} className={className} disabled={disabled}>
    <div className={styles.btnChildren}>{children}</div>
  </button>
);
