import './App.css';
import { Router } from './app/Router';
import { ThemeProvider, theme, ColorModeProvider, CSSReset } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Router />
        </ColorModeProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
