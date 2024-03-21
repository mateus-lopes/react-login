import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    email: '',
    password: '',
    descripton: '',
    token: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            if (action.payload.name) state.name = action.payload.name;
            if (action.payload.email) state.email = action.payload.email;
            if (action.payload.password) state.password = action.payload.password;
            if (action.payload.descripton) state.descripton = action.payload.descripton;
            if (action.payload.token) state.token = action.payload.token;
        },
    }
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;