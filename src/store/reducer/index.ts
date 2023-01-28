import { combineReducers } from '@reduxjs/toolkit';

import dataFromServer from './dataFromServer';

const rootReducer = combineReducers({
  dataFromServer,
});

export default rootReducer;
