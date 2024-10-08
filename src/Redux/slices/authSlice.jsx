import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_API = "http://localhost:3001/api/v1";




// Thunk pour l'appel API du login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${URL_API}/user/login`, { email, password });
      console.log(response.data)
      // console.log(response.data.message)
      // console.log(response.data.body.token)
      // Store the token in local storage
      localStorage.setItem('userToken', response?.data?.body?.token);
      return response?.data; // Retourne les données de l'API si succès
    } catch (error) {
      return rejectWithValue(error?.response?.data); // Gestion des erreurs
    }
  }
);

const initialState = {
  email: '',
  password: '',
  isAuthenticated: !!localStorage.getItem('userToken'), // Vérifiez si le token est présent
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.email = '';
      state.password = '';
      state.isAuthenticated = false;
      state.error = null;

      // Supprimer le token JWT du localStorage
      localStorage.removeItem('userToken');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.isAuthenticated = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;