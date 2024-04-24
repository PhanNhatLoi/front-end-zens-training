"use client";
import { createTheme } from "@mui/material/styles";

// Light mode theme
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#ffed4a",
    },
    error: {
      main: "#e3342f",
    },
    text: {
      primary: "#062046",
    },
  },
});

// Dark mode theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#292C38",
    },
    secondary: {
      main: "#ffed4a",
    },
    error: {
      main: "#e3342f",
    },
    text: {
      primary: "#FFFFFF",
    },
  },
});
