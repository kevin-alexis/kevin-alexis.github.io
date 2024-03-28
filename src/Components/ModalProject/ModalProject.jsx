import React, { useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function Modal200({setShowModalProject}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     onClose(); // Cierra automáticamente el modal después de 5 segundos
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
    <Modal isOpen={isOpen} onClose={() => {
      onClose();
      setShowModalProject(false); // Cierra el estado del modal de éxito cuando se cierra manualmente
    }} 
    placement={'center'}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">El mensaje no pudo ser enviado</ModalHeader>
            <ModalBody>
              <p className="text-black text-pretty">
              Lo sentimos, ha habido un problema al enviar tu mensaje. Por favor, inténtalo nuevamente más tarde.
              </p>
              <p className="text-orange-500 text-pretty">
              Si el problema persiste, por favor, contacta con nosotros por Whatsapp dando click en el siguiente icono.
              </p>
              <a href="https://api.whatsapp.com/send?phone=529984111421" target='_blank' className="w-1/12">
                <i class="fa-brands fa-whatsapp text-green-500"></i>
              </a> 
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
