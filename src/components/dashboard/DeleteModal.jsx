import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react';

function DeleteModal({ onConfirm, onCancel, dataId }) {
  return (
    <Modal isOpen={dataId !== null} onClose={onCancel}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete Confirmation</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Are you sure you want to delete this book?</ModalBody>

        <ModalFooter>
          <Button colorScheme="red" onClick={() => onConfirm(dataId)} mr={3}>
            Confirm
          </Button>
          <Button onClick={onCancel}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export { DeleteModal };
