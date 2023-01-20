import { Button, useDisclosure, Stack } from '@chakra-ui/react';
import { InputSearch } from '../components/dashboard/InputSearch';
import { TableDashboard } from '../components/dashboard/TableDashboard';
import { ModalAddData } from '../components/dashboard/ModalAddData';
import { Navbar } from '../components/common/Navbar';

const Dashboard = () => {
  const { onOpen } = useDisclosure();

  return (
    <div id="Home" style={{ height: '800px' }}>
      <Navbar />
      <Stack mt={10} spacing={440} direction="row" align="center">
        <Button ml={5} onClick={onOpen}>
          Add Data
        </Button>
        <InputSearch />
      </Stack>
      <ModalAddData />
      <TableDashboard />
    </div>
  );
};

export { Dashboard };
