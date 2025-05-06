import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const VITE_BASE_URL = "http://127.0.0.1:4001/api/v1";

export const withdraw = createAsyncThunk(
  "user/withdraw",
  async ({ userId, amount }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${VITE_BASE_URL}/account/withdraw`, { userId, amount });
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

const withdrawSlice = createSlice({
  name: "withdraw",
  initialState: {
    loading: false,
    error: null,
    user: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(withdraw.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(withdraw.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(withdraw.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default withdrawSlice.reducer;
