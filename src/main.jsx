// 1. Import the extendTheme function
import React from 'react';
import { extendTheme } from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import './index.css';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac'
  }
};

const theme = extendTheme({ colors });

// 3. Pass the `theme` prop to the `ChakraProvider`
const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
