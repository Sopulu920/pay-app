import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const VITE_BASE_URL = "http://127.0.0.1:4001/api/v1";

export const deposit = createAsyncThunk(
  "user/deposit",
  async ({ userId, amount }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${VITE_BASE_URL}/account/deposit`, { userId, amount });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const depositSlice = createSlice({
  name: "deposit",
  initialState: {
    loading: false,
    error: null,
    user: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deposit.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deposit.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(deposit.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default depositSlice.reducer;