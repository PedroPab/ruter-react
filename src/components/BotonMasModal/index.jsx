import { Button } from 'react-bootstrap';

import { ModalPedido } from '../ModalPedido';
import React from 'react';

const BotonMasModal = ({ dataPedido }) => {
  const [showModal, setShowModal] = React.useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <>
      <Button size="" variant="outline-secondary" onClick={handleShowModal}>Accion</Button>

      <ModalPedido
        show={showModal}
        handleClose={handleCloseModal}
        data={dataPedido}
      />
    </>


  )
}

export { BotonMasModal }