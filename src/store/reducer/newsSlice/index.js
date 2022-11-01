import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

// const API_KEY = '07a34516595c49a1bb1443fc679cd36f';
// const API_KEY = '5ebaeb88c7804e0abe00744a3c5094df';
// const API_KEY = '89af4ea40b3042889d0f6ea74b528ff0';
// const API_KEY = 'cdd17b2a52fe4f9e9cfb76e7cf5429e7';
// const API_KEY = '37f7d0f5be0e41278b9a6123d70f1066';
const API_KEY = 'e55f43861808431ca472c69449814adc';

const NEWS_URL = `https://newsapi.org/v2/everything`;
const NEWS_URL_POPULAR = `&sortBy=popularity&pageSize=6&apiKey=${API_KEY}`;
const NEWS_URL_RECENT = `&sortBy=publishedAt&pageSize=30&apiKey=${API_KEY}`;

const NEWS_URL_INDONESIA = `https://newsapi.org/v2/top-headlines?country=id`;
const NEWS_URL_INDONESIA_POPULAR = `&apiKey=${API_KEY}`;

const initialState = {
  newsList: [],
  newsRecent: [],
  isLoading: false,
  errorMessage: '',
};

export const fetchIndonesiaPopular = createAsyncThunk(
  'news/fetchIndonesiaPopular',
  async (query) => {
    try {
      const response = await axios.get(
        `${NEWS_URL_INDONESIA}&q=${query}${NEWS_URL_INDONESIA_POPULAR}`,
      );
      const data = await response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (fetchParam) => {
    try {
      let response;
      if (fetchParam.jenis === 'popular') {
        response = await axios.get(
          `${NEWS_URL}?q=${fetchParam.query}${NEWS_URL_POPULAR}`,
        );
      } else {
        response = await axios.get(
          `${NEWS_URL}?q=${fetchParam.query}${NEWS_URL_RECENT}`,
        );
      }
      const data = await response.data;

      return { ...data, tipe: fetchParam.jenis };
    } catch (error) {
      console.log(error);
    }
  },
);
const newsSlice = createSlice({
  name: 'news',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
        state.newsList = initialState.newsList;
        state.errorMessage = initialState.errorMessage;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.isLoading = initialState.isLoading;
        console.log('action.payload =====>>>>', action.payload);
        if (action.payload.tipe === 'popular') {
          const { articles } = action.payload;
          state.newsList = articles;
        } else if (action.payload.tipe === 'recent') {
          const { articles } = action.payload;
          state.newsRecent = articles;
        }
        state.errorMessage = initialState.errorMessage;
      })
      .addCase(fetchNews.rejected, (state) => {
        state.isLoading = initialState.isLoading;
        state.newsList = initialState.newsList;
        state.errorMessage = 'Fetch Failed';
      })

      .addCase(fetchIndonesiaPopular.pending, (state) => {
        state.isLoading = true;
        state.newsRecent = initialState.newsRecent;
        state.newsList = initialState.newsList;
        state.errorMessage = initialState.errorMessage;
      })
      .addCase(fetchIndonesiaPopular.fulfilled, (state, action) => {
        state.isLoading = initialState.isLoading;
        const { articles } = action.payload;
        state.newsRecent = articles;
        state.newsList = articles;
        state.errorMessage = initialState.errorMessage;
      })
      .addCase(fetchIndonesiaPopular.rejected, (state) => {
        state.isLoading = initialState.isLoading;
        state.newsRecent = initialState.newsRecent;
        state.newsList = initialState.newsList;
        state.errorMessage = 'Fetch Failed';
      });
  },
});

export default newsSlice.reducer;
