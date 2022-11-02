import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {
    setSearch: (state, action) => {
      console.log('search yg di setSearch ==>>> ', action.payload);
      state.search = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
