import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import profileReducer from './slices/profileSlice';
import signupReducer from './slices/signupSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
        signup: signupReducer,
      },
  });

export default store;