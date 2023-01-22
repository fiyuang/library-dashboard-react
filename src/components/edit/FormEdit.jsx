import React from 'react';
import { useState, useEffect } from 'react';
import { Input, Box, FormControl, FormLabel, Textarea, Stack, Button } from '@chakra-ui/react';
import { supabase } from '../../utils/supabase';

const FormEdit = (bookId) => {
  const [detailBook, setDetailBook] = useState([]);

  useEffect(() => {
    const fetchDetailBookData = async () => {
      const result = await supabase.from('books').select().eq('id', bookId.params);
      setDetailBook(result.data);
    };

    fetchDetailBookData();
  }, []);

  return (
    <Box p={9}>
      {detailBook?.map((item) => (
        <>
          <FormControl my={5}>
            <FormLabel>Title</FormLabel>
            <Input type="text" value={item.title} />
          </FormControl>

          <FormControl my={5}>
            <FormLabel>Author</FormLabel>
            <Input type="text" value={item.author} />
          </FormControl>

          <FormControl my={5}>
            <FormLabel>Quantity</FormLabel>
            <Input type="text" value={item.quantity} />
          </FormControl>

          <FormControl my={5}>
            <FormLabel>Description</FormLabel>
            <Textarea value={item.description} />
          </FormControl>
        </>
      ))}
      <Stack direction="row" justifyContent="flex-end">
        <Button colorScheme="teal" variant="solid">
          Save
        </Button>
      </Stack>
    </Box>
  );
};

export { FormEdit };
