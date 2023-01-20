import { Text } from '@chakra-ui/react';

const Name = () => {
  return (
    <Text
      as="b"
      fontSize={{ base: '18px', md: '24px', lg: '30px' }}
      // style={{ textShadow: "#FC0 1px 0 10px" }}
    >
      Library
    </Text>
  );
};

export default Name;
