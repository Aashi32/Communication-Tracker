import React from "react";
import ReactDOM from "react-dom/client"; // Ensure you're using the correct import for React 18
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

// Create the root element using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app inside the root element
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
