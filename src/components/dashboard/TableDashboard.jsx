import React from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Stack } from '@chakra-ui/react';
import { supabase } from '../../utils/supabase';
import { DeleteModal } from './DeleteModal';

const TableDashboard = () => {
  const [books, setBooks] = useState([]);
  const [selectedDataId, setSelectedDataId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(true);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBooksData = async () => {
      try {
        const result = await supabase.from('books').select();
        setBooks(result.data);
      } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    };

    fetchBooksData();
  }, []);

  function closeModal() {
    setIsModalOpen(false);
  }

  async function handleDelete(dataId) {
    // setIsLoading(true);
    try {
      const { deleteData } = await supabase.from('books').delete().eq('id', dataId);
      closeModal();
      Swal.fire({
        title: 'Success!',
        text: 'Data deleted successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        window.location.reload();
      });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'OK'
      });
      // setError(err);
    }
  }

  return (
    <>
      <TableContainer mt={10}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Book Title</Th>
              <Th>Author</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {books?.map((item, index) => (
              <Tr key={index}>
                <Td>{item.title}</Td>
                <Td>{item.author}</Td>
                <Td>
                  <Stack spacing={2} direction="row" align="center">
                    <Button colorScheme="blue" size="sm">
                      Detail
                    </Button>
                    <Link to={`/edit/${item.id}`}>
                      <Button colorScheme="orange" size="sm">
                        Edit
                      </Button>
                    </Link>
                    <Button colorScheme="red" size="sm" onClick={() => setSelectedDataId(item.id)}>
                      Delete
                    </Button>
                  </Stack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        {isModalOpen && (
          <DeleteModal
            onConfirm={handleDelete}
            onCancel={() => setIsModalOpen(false)}
            dataId={selectedDataId}
          />
        )}
      </TableContainer>
    </>
  );
};

export { TableDashboard };
