import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global'
import theme from './styles/theme';
import { NewNote } from "./pages/NewNote"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NewNote />
    </ThemeProvider>
  </React.StrictMode>
)
