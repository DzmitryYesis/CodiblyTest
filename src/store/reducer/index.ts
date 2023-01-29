import { combineReducers } from '@reduxjs/toolkit';

import dataFromServer from './dataFromServer';
import mainPage from './mainPageState';
import modal from './modal';

const rootReducer = combineReducers({
  dataFromServer,
  modal,
  mainPage,
});

export default rootReducer;
