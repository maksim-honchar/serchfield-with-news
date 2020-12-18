import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../features/search_filed/newsSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();