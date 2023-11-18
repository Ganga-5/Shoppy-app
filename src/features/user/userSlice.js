import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from '../user/userService';
import { ToastContainer, toast } from 'react-toastify';
// import { createAsyncThunk } from '@reduxjs/toolkit';

export const registerUser = createAsyncThunk(
    "auth/register",
    async(userData, thunkAPI) => {
        try {
            return await authService.register(userData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);



// const userDefaultState = {
//     id: null,
//     email: null,
//     name: null,
//     role: null,
//     password: null,
//     phoneNumber: null,
//     token: null
// };

const initialState = {
    user : "",
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ""
};
export const authSlice = createSlice({
    name:"auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError=false;
            state.isSuccess = true;
            state.createdUser = action.payload;
            if (state.isSuccess === true) {
                toast.success("User Created Successfully!")
            }
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError= true;
            state.isSuccess = false;
            state.message = action.error;
            if (state.isError === true) {
                toast.error(action.error);
            }
        });
    },
});



export default authSlice.reducer;