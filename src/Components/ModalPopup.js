import {  Button, Modal } from 'react-bootstrap';
import React from 'react'


const ModalPopup=({show,handleClose,children,handleSubmit,heading})=>{


    return (
      <>

        <Modal show={show} onHide={handleClose} contentClassName='minht100' >
          <Modal.Header closeButton>
            <Modal.Title>{heading}</Modal.Title>
          </Modal.Header>
          <Modal.Body bsPrefix='modal-body minht100'>
{children}
              </Modal.Body>
          <Modal.Footer>

            <Button variant="primary" onClick={handleSubmit}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
export default ModalPopup