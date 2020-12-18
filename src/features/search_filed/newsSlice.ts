import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    data: [],
  },
  reducers: {
    addNews: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addNews } = newsSlice.actions;

export const selectedData = (state: RootState) => state.news.data;

export default newsSlice.reducer;
