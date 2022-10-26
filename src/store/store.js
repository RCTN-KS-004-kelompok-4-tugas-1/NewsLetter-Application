import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import newsSlice from './reducer/newsSlice';
import searchSlice from './reducer/searchSlice';
import savedReducer from './reducer/savedSlice';

const store = configureStore({
  reducer: {
    news: newsSlice,
    search: searchSlice,
    saved: savedReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
