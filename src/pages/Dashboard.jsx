import { Box, Stack } from '@chakra-ui/react';
import { InputSearch } from '../components/dashboard/InputSearch';
import { TableDashboard } from '../components/dashboard/TableDashboard';
import { Navbar } from '../components/common/Navbar';
import { ButtonAddData } from '../components/dashboard/ButtonAddData';

const Dashboard = () => {

  return (
    <Box h={800}>
      <Navbar />
      <Stack mt={10} spacing={440} direction="row" align="center">
        <ButtonAddData />
        <InputSearch />
      </Stack>
      <TableDashboard />
    </Box>
  );
};

export { Dashboard };
