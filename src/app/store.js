import { configureStore } from '@reduxjs/toolkit';
import formLoginReducer from '../features/login/formLoginSlice';

export const store = configureStore({
    reducer: {
        formLogin: formLoginReducer,
    }
});