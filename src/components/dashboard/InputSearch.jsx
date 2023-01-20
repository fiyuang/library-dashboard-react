import React from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

const InputSearch = () => {
  return (
    <InputGroup mt={5} ml={5} w="50%">
      <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
      <Input type="search" placeholder="Search" />
    </InputGroup>
  );
};

export { InputSearch };
