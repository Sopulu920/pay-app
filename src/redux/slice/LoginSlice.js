import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const VITE_BASE_URL = "http://127.0.0.1:4001/api/v1";

//login
export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${VITE_BASE_URL}/auth/login`, credentials);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const loginSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        loading: false,
        error: null,
        isAuthenticated: false,
    },
    reducers: {
        updateUser: (state, action) => {
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
        })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.isAuthenticated = false;
            })
            .addCase('user/logoutUser/fulfilled', (state) => {
                state.user = null;
                state.isAuthenticated = false;
                state.loading = false;
                state.error = null;
            })
    },
});

export const { updateUser } = loginSlice.actions;

export const getUserId = (state) => state.login.user?.data;

export default loginSlice.reducer;