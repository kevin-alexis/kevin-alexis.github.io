import React, { useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function Modal200({setShowModalProject, name, image}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose} onClose={() => {
      onClose();
      setShowModalProject(false); // Cierra el estado del modal de éxito cuando se cierra manualmente
    }} 
    placement={'center'}
    size="5xl"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 w-fit">{name}</ModalHeader>
            <ModalBody className="pb-5">
              <img src={image} alt="" class="h-full rounded-md"/>
            </ModalBody>
            <ModalFooter className="bg-black/90">
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
