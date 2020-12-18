import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    data: [],
    favorites: [],
  },
  reducers: {
    addNews: (state, action) => {
      state.data = action.payload;
    },
    addFavorites: (state, action) => {
      state.favorites = state.favorites.concat(action.payload);
    },
  },
});

export const { addNews, addFavorites } = newsSlice.actions;

export const selectedData = (state: RootState) => state.news.data;
export const selectedFavorites = (state: RootState) => state.news.favorites;

export default newsSlice.reducer;
