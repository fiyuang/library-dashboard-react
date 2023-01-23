import './App.css';
import { Router } from './app/Router';
import { ThemeProvider, theme, ColorModeProvider, CSSReset } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Router />
          <ToastContainer />
        </ColorModeProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
