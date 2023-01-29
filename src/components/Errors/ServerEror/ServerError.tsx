import { ReactElement } from 'react';

import classes from '../Error.module.scss';

export const ServerError = (): ReactElement => (
  <div className={classes.wrapper}>
    <h1>Server Error!</h1>
    <p className={classes.error_description}>
      Something went wrong! Try again in a couple of minutes.
    </p>
  </div>
);
