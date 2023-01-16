import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useAuth } from '../../contexts/Auth';

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signIn } = useAuth();
  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    // @TODO: add login logic
    // Get email and password input values
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Calls `signIn` function from the context
    const { error } = await signIn({ email, password });

    if (error) {
      alert('error signing in');
    } else {
      // Redirect user to Dashboard
      history.push('/');
    }
  }

  return (
    <Box my={8} textAlign="left">
      <form onSubmit={handleSubmit}>
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
      </form>
    </Box>
  );
};

export { LoginForm };
