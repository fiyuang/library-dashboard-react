import React from 'react';
import {
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Stack
} from '@chakra-ui/react';

import { SearchIcon } from '@chakra-ui/icons';

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <div id="Home" style={{ height: '800px' }}>
      <Stack mt={10} spacing={440} direction="row" align="center">
        <Button ml={5} onClick={onOpen}>
          Add Data
        </Button>
        <InputGroup mt={5} ml={5} w="50%">
          <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
          <Input type="search" placeholder="Search" />
        </InputGroup>
      </Stack>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Book Data</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Book name</FormLabel>
              <Input ref={initialRef} placeholder="Book name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Quantity</FormLabel>
              <Input placeholder="Quantity" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <TableContainer mt={10}>
        <Table variant="simple">
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead>
            <Tr>
              <Th>No.</Th>
              <Th>Book Title</Th>
              <Th>Author</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Love For Imperfect Things</Td>
              <Td>Haemin Sunim</Td>
              <Td>
                <Stack spacing={2} direction="row" align="center">
                  <Button colorScheme="blue" size="sm">
                    Detail
                  </Button>
                  <Button colorScheme="orange" size="sm">
                    Edit
                  </Button>
                  <Button colorScheme="red" size="sm">
                    Delete
                  </Button>
                </Stack>
              </Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>The Things You Can See Only When You Slow Down</Td>
              <Td>Haemin Sunim</Td>
              <Td>
                <Stack spacing={2} direction="row" align="center">
                  <Button colorScheme="blue" size="sm">
                    Detail
                  </Button>
                  <Button colorScheme="orange" size="sm">
                    Edit
                  </Button>
                  <Button colorScheme="red" size="sm">
                    Delete
                  </Button>
                </Stack>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export { Home };
