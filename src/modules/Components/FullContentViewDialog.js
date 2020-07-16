import React from 'react';

import {Modal, Button} from 'react-bootstrap'

export default function FullContentViewDialog({show, handleClose, data}){
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{data.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body> {data.content} </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}> Close </Button>
      </Modal.Footer>
    </Modal>
  )
}