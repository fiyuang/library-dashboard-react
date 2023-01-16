import { useRef, useState } from 'react';
import { LoginArea } from './login/LoginArea';
import { ThemeProvider, theme, ColorModeProvider, CSSReset } from '@chakra-ui/react';

export function Login() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <LoginArea />
      </ColorModeProvider>
    </ThemeProvider>
  );
}
