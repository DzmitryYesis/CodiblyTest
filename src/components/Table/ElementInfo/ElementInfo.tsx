import { ReactElement } from 'react';

import { TElementType } from 'types';

export const ElementInfo = ({ element }: TElementType): ReactElement => (
  <div>
    <p>{element.id}</p>
    <p>{element.name}</p>
    <p>{element.year}</p>
    <p>{element.color}</p>
    <p>{element.pantone_value}</p>
  </div>
);
