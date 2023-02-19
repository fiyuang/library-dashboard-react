import { React, useState, useEffect } from 'react';
import { supabase } from '../../utils/supabase';

import { Formik, Form, Field } from 'formik';
import { Box, Button, FormControl, FormLabel, Input, Stack, Textarea } from '@chakra-ui/react';

const FormEdit = (bookId) => {
  const [detailBook, setDetailBook] = useState([]);
  const [initialValues, setInitialValues] = useState({
    title: '',
    author: '',
    quantity: '',
    description: '',
  });

  useEffect(() => {
    const fetchDetailBookData = async () => {
      const result = await supabase.from('books').select().eq('id', bookId.params);
      setDetailBook(result.data);
    };

    fetchDetailBookData();
  }, [bookId]);

  useEffect(() => {
    if (detailBook.length) {
      setInitialValues({
        title: detailBook[0].title,
        author: detailBook[0].author,
        quantity: detailBook[0].quantity,
        description: detailBook[0].description,
      });
    }
  }, [detailBook]);

  const onSubmit = async (values) => {
    // Your submit logic goes here
  };

  return (
    <Box p={9}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <Field name="title">
              {({ field }) => (
                <FormControl my={5}>
                  <FormLabel>Title</FormLabel>
                  <Input type="text"  {...field} value="aaa" />
                </FormControl>
              )}
            </Field>

            <Field name="author">
              {({ field }) => (
                <FormControl my={5}>
                  <FormLabel>Author</FormLabel>
                  <Input type="text" {...field} />
                </FormControl>
              )}
            </Field>

            <Field name="quantity">
              {({ field }) => (
                <FormControl my={5}>
                  <FormLabel>Quantity</FormLabel>
                  <Input type="text" {...field} />
                </FormControl>
              )}
            </Field>

            <Field name="description">
              {({ field }) => (
                <FormControl my={5}>
                  <FormLabel>Description</FormLabel>
                  <Textarea {...field} />
                </FormControl>
              )}
            </Field>

            <Stack direction="row" justifyContent="flex-end">
              <Button colorScheme="teal" variant="solid" type="submit" isLoading={isSubmitting}>
                Save
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};


export { FormEdit };
