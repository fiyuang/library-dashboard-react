import { Box, Flex, IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { LoginHeader } from './LoginHeader';
import { LoginForm } from './LoginForm';

const LoginCard = () => {
  return (
    <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
      <Box
        borderWidth={1}
        px={4}
        width="full"
        maxWidth="500px"
        borderRadius={4}
        textAlign="center"
        boxShadow="lg"
      >
        <DarkLightMode />
        <Box p={4}>
          <LoginHeader />
          <LoginForm />
        </Box>
      </Box>
    </Flex>
  );
};

const DarkLightMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box textAlign="right" py={4}>
      <IconButton
        icon={colorMode == 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        variant="ghost"
      />
    </Box>
  );
};

export { LoginCard };
