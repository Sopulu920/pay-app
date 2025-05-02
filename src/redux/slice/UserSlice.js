import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const VITE_BASE_URL = "http://127.0.0.1:4001/api/v1";

//signup
export const signupUser = createAsyncThunk(
    "user/signupUser",
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${VITE_BASE_URL}/auth/register`, userData);
            return response.data;
        }
        catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder
        //sign up
        .addCase(signupUser.pending, (state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(signupUser.fulfilled, (state, action)=>{
            state.loading=false;
            state.user=action.payload;
        })
        .addCase(signupUser.rejected, (state,action)=>{
            state.loading=false;
            state.error = action.payload;
        });

        
    },
});

export default userSlice.reducer;