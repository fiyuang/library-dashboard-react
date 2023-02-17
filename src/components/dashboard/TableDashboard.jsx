import React from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Stack
} from '@chakra-ui/react';
import { Loading } from './Loading';
import useSupabase from '../../utils/hooks/useSupabase';
import { getAllBooks, deleteBook } from '../../services/SupabaseService';
import { DeleteModal } from './DeleteModal';

const TableDashboard = ({ tableData, setTableData }) => {
  const [selectedDataId, setSelectedDataId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const { loading, data } = useSupabase(getAllBooks);
  useEffect(() => {
    if (!loading && data) {
      setTableData(data);
    }
  }, [loading, data]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  async function handleDelete(dataId) {
    try {
      const { deleteData } = await deleteBook(dataId);
      closeModal();
      Swal.fire({
        title: 'Success!',
        text: 'Data deleted successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        // Update the table data
        getAllBooks().then(({ data: newData }) => {
          setTableData(newData);
        });
      });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }

  return (
    <>
      {loading && <Loading />}
      {!loading && (
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
              {tableData?.map((item, index) => (
                <Tr key={index}>
                  <Td>{item.title}</Td>
                  <Td>{item.author}</Td>
                  <Td>
                    <Stack spacing={2} direction="row" align="center">
                      <Box as="a" href={`/edit/${item.id}`} textDecoration="none">
                        <Box
                          as="button"
                          borderRadius="md"
                          bg="orange"
                          color="white"
                          size="sm"
                          px={3}
                          h={8}
                        >
                          Edit
                        </Box>
                      </Box>
                      <Box
                        as="button"
                        borderRadius="md"
                        bg="red"
                        color="white"
                        px={3}
                        h={8}
                        onClick={() => setSelectedDataId({ id: item.id, title: item.title })}
                      >
                        Delete
                      </Box>
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
      )}
    </>
  );
};

export { TableDashboard };
