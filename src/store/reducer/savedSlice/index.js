import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const savedSlice = createSlice({
  name: 'saveItem',
  initialState,
  reducers: {
    addSaved: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    deleteSaved: (state, action) => {
      const temp = state.value.filter((val) => val.title !== action.payload);
      state.value = temp;
    },
  },
});

export const { addSaved, deleteSaved } = savedSlice.actions;

export default savedSlice.reducer;
