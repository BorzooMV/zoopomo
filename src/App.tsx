import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Layout from "./components/layout";
import store from "./redux/store";
import theme from "./utils/theme";
import GlobalStyle from "./utils/theme/global.style";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
