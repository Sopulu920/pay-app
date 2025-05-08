import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const VITE_BASE_URL = "http://127.0.0.1:4001/api/v1";

// Async thunk for fetching transactions
export const fetchTransactions = createAsyncThunk(
    "transactions/fetchTransactions",
    async (userId, { rejectWithValue }) => {
        try {
            console.log("Fetching transactions for userId:", userId);
            const response = await axios.get(`${VITE_BASE_URL}/transactions`, {
                params: { user: userId }
            });
            console.log("Transactions fetched:", response.data);
            return response.data;
        } catch (error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

const transactionSlice = createSlice({
    name: "transactions",
    initialState: {
        loading: false,
        error: null,
        transactions: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTransactions.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTransactions.fulfilled, (state, action) => {
                state.loading = false;
                state.transactions = action.payload;
                console.log(state.transactions);
            })
            .addCase(fetchTransactions.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});


export default transactionSlice.reducer;