import { Box, Stack } from '@chakra-ui/react';
import { InputSearch } from '../components/dashboard/InputSearch';
import { TableDashboard } from '../components/dashboard/TableDashboard';
import { Navbar } from '../components/common/Navbar';
import { AddData } from '../components/dashboard/addData/AddData';

const Dashboard = () => {
  return (
    <Box h={800}>
      <Navbar />
      <Stack mt={10} spacing={440} direction="row" align="center">
        <AddData />
        <InputSearch />
      </Stack>
      <TableDashboard />
    </Box>
  );
};

export { Dashboard };
