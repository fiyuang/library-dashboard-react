import { Box, Stack } from '@chakra-ui/react';
import { TableDashboard } from '../components/dashboard/TableDashboard';
import { Navbar } from '../components/common/Navbar';
import { AddData } from '../components/dashboard/addData/AddData';
import { useState } from 'react';

const Dashboard = () => {
  const [tableData, setTableData] = useState([]);

  return (
    <Box h={800}>
      <Navbar />
      <Stack mt={10} spacing={440} direction="row" align="center">
        <AddData setTableData={setTableData} />
      </Stack>
      <TableDashboard tableData={tableData} setTableData={setTableData} />
    </Box>
  );
};

export { Dashboard };
