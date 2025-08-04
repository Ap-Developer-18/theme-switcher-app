// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import themeReducer from "./themeSlice"; // ✅ Import theme slice

export const store = configureStore({
  reducer: {
    product: productReducer,
    theme: themeReducer, // ✅ Add theme to the reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
