import { combineReducers } from '@reduxjs/toolkit';

import dataFromServer from './dataFromServer';

import modal from 'store/reducer/modal';

const rootReducer = combineReducers({
  dataFromServer,
  modal,
});

export default rootReducer;
