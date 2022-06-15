import { configureStore } from '@reduxjs/toolkit';
import actualWordReducer from '../reducers/actualWordReducer';
// eslint-disable-next-line import/no-named-as-default
import gameReducer from '../reducers/gameReducer';

const store = configureStore({
  reducer: {
    actualWord: actualWordReducer,
    game: gameReducer,
  },
});

export default store;
