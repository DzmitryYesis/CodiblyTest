import { ReactElement } from 'react';

import classes from '../Error.module.scss';

type TClientErrorPropsType = {
  id: string;
};

export const ClientError = ({ id }: TClientErrorPropsType): ReactElement => (
  <div className={classes.wrapper}>
    <h1>Bad Request!</h1>
    <p className={classes.error_description}>Item with ID: {id} not found.</p>
  </div>
);
