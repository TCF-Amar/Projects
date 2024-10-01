import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  themeMode: localStorage.getItem("theme") || "light", // Default to "light"
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      state.themeMode = state.themeMode === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.themeMode);
      const html = document.querySelector("html");
      html.classList.toggle("dark", state.themeMode === "dark");
    },
  },
});

export const { toggleThemeMode } = themeSlice.actions;
export const selectThemeMode = (state) => state.theme.themeMode; // Selector

export default themeSlice.reducer;



// function insert todo in database

function insertTodo() {
  axios.post('')
}