import { FC, ReactElement } from 'react';

import { TIconProps } from 'types';

const WIDTH = 13;
const HEIGHT = 20;

export const ArrowBack: FC<Partial<TIconProps>> = ({
  width = WIDTH,
  height = HEIGHT,
}): ReactElement => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 13 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.5101 1.8701L10.7301 0.100098L0.840088 10.0001L10.7401 19.9001L12.5101 18.1301L4.38009 10.0001L12.5101 1.8701Z"
      fill="#212529"
    />
  </svg>
);
