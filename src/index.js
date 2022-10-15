import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from '@mui/system';
import theme from "./theme/theme";
import UserProvider from './context/UserContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ThemeProvider theme={theme}>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </ThemeProvider>
)
