import { useState, useEffect } from 'react';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

const CountriesTable = ({ countries }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountriesData = async () => {
      const result = await supabase.from('countries').select();
      setCountries(result.data);
    };

    fetchCountriesData();
  }, []);

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
