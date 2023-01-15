import { useState, useEffect } from 'react';
import './App.css';
import { createClient } from '@supabase/supabase-js';
import { Box, Text, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_API_KEY
);

function CountriesTable({ countries }) {
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
}

function App() {
  // const [count, setCount] = useState(0)
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountriesData = async () => {
      const result = await supabase.from('countries').select();
      setCountries(result.data);
    };

    fetchCountriesData();
  }, []);

  return (
    <div className="App">
      <Box w="100%" h="200px" bgGradient="linear(to-t, green.200, pink.500)" />
      <Box w="100%" h="200px" bgGradient="radial(gray.300, yellow.400, pink.200)" />
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Welcome to Chakra UI
      </Text>
      <CountriesTable countries={countries} />
    </div>
  );
}

export default App;
