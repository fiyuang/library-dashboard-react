import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useParams } from 'react-router-dom';

const BreadcrumbComponent = () => {
  const { bookId } = useParams()

  return (
    <>
      <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />} mt={5} ml={9}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Edit Page {bookId} </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
};

export { BreadcrumbComponent };
