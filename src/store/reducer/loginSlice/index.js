import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginToken } from '../../../utils/constants/account';
const initialState = {
  isLoading: false,
  isSuccess: false,
  errorMessage: '',
};

const loginAPI = async ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'dummy@gmail.com' && password === 'dummy123') {
        resolve({
          responseCode: 200,
          data: {
            token: 'abcdesfasad',
          },
        });
      } else {
        reject({
          responseCode: 400,
          data: 'invalid user',
        });
      }
    }, 2000);
  });
};

export const fakeLogin = createAsyncThunk(
  'login/fakeLogin',
  async (email, password) => {
    try {
      const data = await loginAPI(email, password);
      return data;
    } catch (error) {
      throw error;
    }
  },
);

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout: (state) => {
      state.isSuccess = initialState.isSuccess;
      state.isLoading = initialState.isLoading;
      state.errorMessage = initialState.errorMessage;
      localStorage.removeItem('Login');
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fakeLogin.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = initialState.errorMessage;
      })
      .addCase(fakeLogin.fulfilled, (state) => {
        state.isLoading = initialState.isLoading;
        state.isSuccess = true;
        localStorage.setItem('Login', loginToken);
        state.errorMessage = initialState.errorMessage;
      })
      .addCase(fakeLogin.rejected, (state) => {
        state.isLoading = initialState.isLoading;
        state.errorMessage = 'Email atau Password Salah';
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
