import { useState, useEffect } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner
} from '@chakra-ui/react';

const DeleteModal = ({ onConfirm, onCancel, dataId }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = async (dataId) => {
    setIsLoading(true);
    await onConfirm(dataId);
    setIsLoading(false);
  };

  return (
    <Modal isOpen={dataId !== null} onClose={onCancel}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete Confirmation</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Are you sure you want to delete this book: {dataId ? dataId.title : ''} ?
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" onClick={() => handleConfirm(dataId.id)} mr={3}>
            {isLoading ? <Spinner mr={2} size="sm" /> : 'Confirm'}
          </Button>
          <Button onClick={onCancel}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export { DeleteModal };
