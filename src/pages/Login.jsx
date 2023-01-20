import { LoginArea } from '../components/login/LoginArea';

import { ThemeProvider, theme, ColorModeProvider, CSSReset } from '@chakra-ui/react';

const Login = () => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <LoginArea />
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export { Login };
