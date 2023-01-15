import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

const CountriesTable = ({ countries }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>No</Th>
          <Th>Name</Th>
        </Tr>
      </Thead>
      <Tbody>
        {countries.map((item, index) => (
          <Tr key={index}>
            <Td>{item.id}</Td>
            <Td>{item.name}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export { CountriesTable };
