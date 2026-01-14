import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { announcementService } from "../services/announcement";

export const fetchAnnouncements = createAsyncThunk(
  "announcements/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await announcementService.getAll();
      // Handle both response formats (with/without success wrapper)
      return response.data?.data || response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const announcementSlice = createSlice({
  name: "announcements",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnnouncements.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnnouncements.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAnnouncements.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default announcementSlice.reducer;