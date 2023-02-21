import { React, useState, useEffect } from 'react';

import { Formik, Form, Field } from 'formik';
import { Box, Button, FormControl, FormLabel, Input, Stack, Textarea } from '@chakra-ui/react';
import { getBook, updateBook } from '../../services/SupabaseService';
import { Loading } from '../dashboard/Loading';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const FormEdit = (bookId) => {
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    title: '',
    author: '',
    quantity: '',
    description: ''
  });
  const [bookLoaded, setBookLoaded] = useState(false);

  useEffect(() => {
    async function fetchBookData() {
      const { data, error } = await getBook(bookId.params);
      if (error) {
        console.error(error);
      } else if (data.length) {
        setInitialValues({
          title: data[0].title,
          author: data[0].author,
          quantity: data[0].quantity,
          description: data[0].description
        });
        setBookLoaded(true);
      }
    }

    fetchBookData();
  }, []);

  const onSubmit = async (values) => {
    const updatedBook = {
      title: values.title,
      author: values.author,
      quantity: values.quantity,
      description: values.description
    };
    const { error } = await updateBook(bookId.params, updatedBook);
    if (error) {
      Swal.fire({
        title: 'Error!',
        text: error,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    } else {
      Swal.fire({
        title: 'Success!',
        text: 'Data deleted successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/'); // redirect to dashboard page
      });
    }
  };

  return bookLoaded ? (
    <Box p={9}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <Field name="title">
              {({ field }) => (
                <FormControl my={5}>
                  <FormLabel>Title</FormLabel>
                  <Input type="text" {...field} />
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
  ) : (
    <Loading />
  );
};

export { FormEdit };
