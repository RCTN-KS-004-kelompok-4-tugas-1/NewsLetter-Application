import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import newsSlice from './reducer/newsSlice/newsSlice';
import searchSlice from './reducer/searchSlice/searchSlice';
const store = configureStore({
  reducer: {
    news: newsSlice,
    search: searchSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
