import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const VITE_BASE_URL = "http://127.0.0.1:4001/api/v1";

export const fetchUserData = createAsyncThunk(
    "user/fetch",
    async (userId) => {
        const response = await axios.get(`${VITE_BASE_URL}/users/${userId}`);
        return response.data;
    }
);

const DataSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        status: "idle",
        error: null,
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.user = action.payload;
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
    
}
);

export default DataSlice.reducer;