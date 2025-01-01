import React from "react";
import { useState } from "react";
import "../../assets/css/UserRegistration.css";
import "../../assets/css/ModalOne.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../../assets/css/ModalOne.css";
function UserRegistration() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <p onClick={handleShow}>पासवर्ड भूल गए है ?</p>
      <Modal show={show} onHide={handleClose} size="md">
        <Modal.Header closeButton>
          <Modal.Title className="nd-modal-title">
            पासवर्ड भूल जाने की स्थिति में पासवर्ड रीसेट फॉर्म
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="nd-modal-body">
          <Form.Group className="mb-3 nd-label-input" controlId="exampleForm.ControlInput1">
            <Form.Label> पंजीकृत मोबाइल नंबर दर्ज करें।</Form.Label>
            <Form.Control
              type="number"
              placeholder=" पंजीकृत मोबाइल नंबर दर्ज करें।"
              required className="nd-forgot-input"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="nd-registration">
          <Button variant="secondary" className="nd-primary-btn">
            जानकारी दर्ज करे
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserRegistration;
