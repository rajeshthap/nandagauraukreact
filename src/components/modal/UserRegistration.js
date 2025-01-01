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
      <p onClick={handleShow}>नए आवेदक/उपयोगकर्त अभी पंजीकरण करें</p>
      <Modal show={show} onHide={handleClose} size="md">
        <Modal.Header closeButton>
          <Modal.Title className="nd-modal-title">
            नए आवेदक/उपयोगकर्ता पंजीकरण जानकारी
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="nd-modal-body">
          <Form.Group
            className="mb-3 nd-label-input"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="nd-form-label">
              पंजीकरण फॉर्म पर आगे बढ़ने के लिए अपना वैध मोबाइल नंबर दर्ज करें।
            </Form.Label>
            <Form.Control
              className="nd-forgot-input"
              type="email"
              placeholder="पंजीकरण फॉर्म पर आगे बढ़ने के लिए अपना वैध मोबाइल नंबर दर्ज करें।"
            />
          </Form.Group>
          <Form.Group className="mb-3 nd-label-input" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="nd-form-label">
          अपने जिले का नाम चुनें
            </Form.Label>
            <Form.Select aria-label="Default select example" className="nd-form-label">
              <option className="nd-label-input">अपने जिले का नाम चुनें</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="nd-registration">
          <Button
            variant="secondary"
            className="nd-primary-btn"
          >
            जानकारी दर्ज करे
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserRegistration;
