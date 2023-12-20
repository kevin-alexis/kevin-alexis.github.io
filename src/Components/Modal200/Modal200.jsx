import React, { useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function Modal200({setShowSuccessModal}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     onClose(); // Cierra automáticamente el modal después de 5 segundos
  //     // setShowSuccessModal(false); // Cierra el estado del modal de éxito cuando se cierra manualmente
  //   }, 5000);

  //   return () => clearTimeout(timer); // Limpia el temporizador al desmontar el componente
  // }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      // Abre automáticamente el modal al montar el componente
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <Modal 
    isOpen={isOpen} 
    onClose={() => {
      onClose();
      setShowSuccessModal(false); // Cierra el estado del modal de éxito cuando se cierra manualmente
    }} 

    placement={'center'}>
      <ModalContent>
        {(onClose) => (
          <>
          
            <ModalHeader className="flex flex-col gap-1">El mensaje fue enviado</ModalHeader>
            <ModalBody>
              <p className="text-black text-pretty">
                Gracias por enviar tu mensaje. Nos pondremos en contacto contigo lo antes posible.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={onClose}>
                Okay
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
      
    </Modal>
  );
}
