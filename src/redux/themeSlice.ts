import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Theme = "light" | "dark" | "colorfull";

interface ThemeState {
  value: Theme;
}

const initialTheme = (localStorage.getItem("app-theme") as Theme) || "light";

const initialState: ThemeState = {
  value: initialTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.value = action.payload;
      localStorage.setItem("app-theme", action.payload);
      document.body.setAttribute("data-theme", action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
