import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import newsSlice from './reducer/newsSlice';
import searchSlice from './reducer/searchSlice';
import savedReducer from './reducer/savedSlice';
import loginSlice from './reducer/loginSlice';
const store = configureStore({
  reducer: {
    news: newsSlice,
    search: searchSlice,
    saved: savedReducer,
    login: loginSlice,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
