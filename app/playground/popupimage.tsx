'use client';

import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
 

const PopupImage = ({ src } : {src: any}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img width="15" src={src} alt="popup image" className = "cursor-pointer" onClick={handleShow} />
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton onClick={handleClose}>
      <Modal.Title>Popup Image</Modal.Title>
    </Modal.Header>
        <Modal.Body>
        text
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>Close</button>
          </Modal.Footer>
      </Modal>
    </>
    
  );
};

export default PopupImage;