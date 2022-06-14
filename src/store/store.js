import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-named-as-default
import gameReducer from '../reducers/gameReducer';

const store = configureStore({
  reducer: gameReducer,
});

export default store;
