import { React, useState, useEffect } from 'react';

import { Formik, Form, Field } from 'formik';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Textarea
} from '@chakra-ui/react';
import { getBook, updateBook } from '../../services/SupabaseService';
import { Loading } from '../dashboard/Loading';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const FormEdit = (bookId) => {
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    title: '',
    author: '',
    quantity: '',
    description: ''
  });
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    quantity: Yup.number().required('Quantity is required').typeError('Quantity must be a number'),
    description: Yup.string().required('Description is required')
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
        text: 'Data updated successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/'); // redirect to dashboard page
      });
    }
  };

  return bookLoaded ? (
    <Box p={9}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <Field name="title">
              {({ field, form }) => (
                <FormControl my={5} isInvalid={form.errors.title && form.touched.title}>
                  <FormLabel>Title</FormLabel>
                  <Input type="text" {...field} />
                  <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="author">
              {({ field, form }) => (
                <FormControl my={5} isInvalid={form.errors.author && form.touched.author}>
                  <FormLabel>Author</FormLabel>
                  <Input type="text" {...field} />
                  <FormErrorMessage>{form.errors.author}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="quantity">
              {({ field, form }) => (
                <FormControl my={5} isInvalid={form.errors.quantity && form.touched.quantity}>
                  <FormLabel>Quantity</FormLabel>
                  <Input type="text" {...field} />
                  <FormErrorMessage>{form.errors.quantity}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="description">
              {({ field, form }) => (
                <FormControl my={5} isInvalid={form.errors.description && form.touched.description}>
                  <FormLabel>Description</FormLabel>
                  <Textarea {...field} />
                  <FormErrorMessage>{form.errors.description}</FormErrorMessage>
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
