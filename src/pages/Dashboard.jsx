import { Button, useDisclosure, Stack } from '@chakra-ui/react';
import { InputSearch } from '../components/dashboard/InputSearch';
import { TableDashboard } from '../components/dashboard/TableDashboard';
import { ModalAddData } from '../components/dashboard/ModalAddData';
import { Navbar } from '../components/common/Navbar';
import { ButtonAddData } from '../components/dashboard/ButtonAddData';

const Dashboard = () => {
  const { onOpen } = useDisclosure();

  return (
    <div id="Home" style={{ height: '800px' }}>
      <Navbar />
      <Stack mt={10} spacing={440} direction="row" align="center">
        <ButtonAddData />
        <InputSearch />
      </Stack>
      <TableDashboard />
    </div>
  );
};

export { Dashboard };
