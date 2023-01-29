import { ReactElement } from 'react';

import classes from './ElementInfo.module.scss';

import { TElementType } from 'types';

export const ElementInfo = ({ element }: TElementType): ReactElement => (
  <div className={classes.wrapper}>
    <h1>Detail Information</h1>
    <div className={classes.info_wrapper}>
      <div className={classes.info_block}>
        <p className={classes.title}>ID:</p>
        <p className={classes.title}>Name:</p>
        <p className={classes.title}>Year:</p>
        <p className={classes.title}>Color:</p>
        <p className={classes.title}>Other info:</p>
      </div>
      <div className={classes.info_block}>
        <p className={classes.value}>{element.id}</p>
        <p className={classes.value}>{element.name}</p>
        <p className={classes.value}>{element.year}</p>
        <p className={classes.value} style={{ background: `${element.color}` }}>
          {element.color}
        </p>
        <p className={classes.value}>{element.pantone_value}</p>
      </div>
    </div>
  </div>
);
