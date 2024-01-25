import { createSlice } from "@reduxjs/toolkit";
import { Themes } from "@/lib/redux/slices/themeSlice/themes";

const initialState: ThemeSliceState = {
  mode: Themes.DARK,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? Themes.DARK : Themes.LIGHT;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

export interface ThemeSliceState {
  mode: Themes;
}
