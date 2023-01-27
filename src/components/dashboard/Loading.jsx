import { Spinner, Flex, Box, Text } from '@chakra-ui/react';

const Loading = () => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box>
        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
        <Text textAlign="center" mt={4} fontWeight="medium">
          Loading
        </Text>
      </Box>
    </Flex>
  );
};

export { Loading };
