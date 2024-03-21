import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/login/userSlice';

export const store = configureStore({
    reducer: {
        formLogin: userReducer,
    }
});