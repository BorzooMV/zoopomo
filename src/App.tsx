import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import AppRouter from "./components/app-router";
import store from "./redux/store";
import theme from "./utils/theme";
import GlobalStyle from "./utils/theme/global.style";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
