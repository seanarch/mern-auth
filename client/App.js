import React from "react";
import MainRouter from "./MainRouter.js";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { hot } from "react-hot-loader";

import theme from "./theme.js";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default hot(module)(App);
