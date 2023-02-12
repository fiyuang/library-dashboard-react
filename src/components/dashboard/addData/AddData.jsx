import React, { useState } from 'react';
import {
  Button,
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
  Textarea,
  Spinner
} from '@chakra-ui/react';
import Swal from 'sweetalert2';
import { supabase } from '../../../utils/supabase';

const AddData = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [bookName, setBookName] = useState('');
  const [bookQuantity, setBookQuantity] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookDescription, setBookDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleBookSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await supabase.from('books').insert({
        title: bookName,
        author: bookAuthor,
        description: bookDescription,
        quantity: parseInt(bookQuantity)
      });
      onClose()
      Swal.fire({
        title: 'Success!',
        text: 'Data added successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        // Update the table data
        // supabase
        //   .from('books')
        //   .select()
        //   .then((updatedBooksData) => {
        //     setBooks(updatedBooksData.data);
        //   });
      });

      setIsLoading(false);
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <>
      <Button ml={5} onClick={onOpen}>
        Add Data
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleBookSubmit}>
            <ModalHeader>Add Book Data</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Book title</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Book name"
                  value={bookName}
                  onChange={(e) => setBookName(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Author</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Author"
                  value={bookAuthor}
                  onChange={(e) => setBookAuthor(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Quantity</FormLabel>
                <Input
                  placeholder="Quantity"
                  value={bookQuantity}
                  onChange={(e) => setBookQuantity(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  value={bookDescription}
                  onChange={(e) => setBookDescription(e.target.value)}
                  placeholder="Book description"
                  size="sm"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>
                {isLoading ? <Spinner mr={2} size="sm" /> : 'Save'}
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export { AddData };
