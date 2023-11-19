import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
//import { fetchCount } from './counterAPI';
import authService from './authService';
import { toast } from 'react-toastify';

const userDefaultState = {
    id: null,
    email: null,
    name: null,
    role: null,
    password: null,
    phoneNumber: null,
    token: null
};

const initialState = {
    user : userDefaultState,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ""
};

export const login = createAsyncThunk('auth/login', async (user,thunkAPI) => {
    try {
        return await authService.login(user);
    }catch (error){
        return thunkAPI.rejectWithValue(error);
    }
})

export const authSlice = createSlice ({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending,
            (state) => {
            state.isLoading = true;
        })
        .addCase(login.fulfilled,(state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.user = action.payload;
            if (state.isSuccess === true) {
                localStorage.setItem("token",action.payload.token);
                toast.info("Login Successfully");
            }
        })
        .addCase(login.rejected,(state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.user = null;
            state.message = action.error;
            if (state.isError === true) {
                toast.error(action.error);
            }
        });
    },
});

export default authSlice.reducer;