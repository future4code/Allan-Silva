import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import Header from './components/header/Header';
import theme from './constants/theme';
import Router from './routes/Router'

const App= () => {

  const token = localStorage.getItem('token')
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
        <Router setRightButtonText={setRightButtonText} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
