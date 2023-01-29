import { FC, ReactElement } from 'react';

import { TIconProps } from 'types';

const ONE_HUNDRED = 100;

export const FailedIcon: FC<Partial<TIconProps>> = ({
  width = ONE_HUNDRED,
  height = ONE_HUNDRED,
  className,
}): ReactElement => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 81 80"
    fill="#FFD600"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M39.5 0C17.696 0 0 17.92 0 40C0 62.08 17.696 80 39.5 80C61.304 80 79 62.08 79 40C79 17.92 61.304 0 39.5 0ZM43.45 60H35.55V52H43.45V60ZM43.45 44H35.55V20H43.45V44Z"
      fill="#30D9B2"
    />
  </svg>
);
