import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { quizService } from "../services/quiz";

export const fetchQuizzes = createAsyncThunk(
  "quizzes/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await quizService.getAll();
      // Backend returns { success: true, data: quizzes }, so extract the data array
      return response.data.data || response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const quizSlice = createSlice({
  name: "quizzes",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizzes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuizzes.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchQuizzes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default quizSlice.reducer;
