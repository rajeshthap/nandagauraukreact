import React from "react";
import Form from "react-bootstrap/Form";

import "../../assets/css/ModalOne.css";
import { Link } from "react-router-dom";

function BirthCheckbox() {
  return (
    <div>
      <Form>
        {["checkbox"].map((type) => (
          <div key={`default-${type}`}>
            <Link to="/NandaStepOne">
              <Form.Check
                type={type}
                id={`default-${type}`}
                label={`ऑनलाइन आवेदन`}
                style={{ cursor: "pointer" }} // Cursor pointer for better UX
              />
            </Link>
          </div>
        ))}
      </Form>
    </div>
  );
}

export default BirthCheckbox;
