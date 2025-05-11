import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const VITE_BASE_URL = "http://127.0.0.1:4001/api/v1";

export const transfer = createAsyncThunk(
    "user/transfer",
    async ({ senderId, receiverAccountNumber, amount }, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${VITE_BASE_URL}/account/transfer`, { senderId, receiverAccountNumber, amount });
            return response.data;
        }
        catch (error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            }
            else {
                return rejectWithValue(error.message);
            }
        }
    }
);

const transferSlice = createSlice({
    name: "transfer",
    initialState: {
        loading: false,
        error: null,
        user: null,
    },
    reducers: {
        clearError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(transfer.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(transfer.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(transfer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
});

export const { clearError } = transferSlice.actions;

export default transferSlice.reducer;