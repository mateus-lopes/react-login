import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: '',
    password: '',
};

export const formLoginSlice = createSlice({
    name: 'formLogin',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
    }
});

export const { setEmail, setPassword } = formLoginSlice.actions;

export default formLoginSlice.reducer;