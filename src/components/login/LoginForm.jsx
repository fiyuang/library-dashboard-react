import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const LoginForm = () => {
  return (
    <Box my={8} textAlign="left">
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type="email" placeholder="Enter your email address" />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="Enter your password" />
      </FormControl>

      <Button colorScheme="teal" width="full" mt={4}>
        Sign In
      </Button>
    </Box>
  );
};

export { LoginForm };
