import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "../../../../assets/css/LeftNav.css";

import "@fortawesome/fontawesome-free"; // Font Awesome library

import DashHeader from "../../DashHeader";
import "../../../../assets/css/NandaStepOne.css";
import "../../../../assets/css/HomePage.css";

import Footer from "../../../footer/Footer";

import InnerNavigation from "../../InnerNavigation";

import { Row, Col, Button } from "react-bootstrap";
import GirlsBornStep from "./GirlsBornStep";

const NandaStepTwo = ({ buttons }) => {
  const [isNavClosed, setIsNavClosed] = useState(false);

  const toggleNav = () => {
    setIsNavClosed(!isNavClosed);
  };

  return (
    <>
      <div>
        {/* Header */}
        <DashHeader />
        <div className="main-container">
          <InnerNavigation />

          {/* Main Container */}
          <div className="main">
            <GirlsBornStep />
            <div className="box-container">
              <Row>
                <Row>
                 
                  <div className="nd-step1">
                    <h3>Step 1 : व्यक्तिगत जानकारी</h3>
                  </div>
                </Row>
                <Col lg={4} md={4} sm={12}>
                  <Form>
                    <Form.Group
                      className="mb-3 nd-req-text"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>
                        कन्या शिशु का नाम <span className="alert-txt">*</span>
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="कन्या शिशु का नाम "
                        className="shadow1 nd-required"
                        required
                      />
                      <span>
                        कन्या का नाम परिवर्तित होने पर शपथ पत्र देना अनिवार्य है
                      </span>
                    </Form.Group>
                  </Form>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <Form.Group
                    className="mb-3 nd-req-text"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      माता का नाम <span className="alert-txt">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="माता का नाम"
                      className="shadow1"
                    />
                  </Form.Group>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <Form.Group
                    className="mb-3 nd-req-text"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      {" "}
                      पिता का नाम <span className="alert-txt">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" पिता का नाम"
                      className="shadow1"
                    />
                  </Form.Group>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <Form.Group
                    className="mb-3 nd-req-text"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      अभिभावक का नाम <span className="alert-txt">*</span>{" "}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="अभिभावक का नाम "
                      className="shadow1"
                    />
                    <span>
                      माता पिता के जीवित न होने की स्थिति में अभिभावक का नाम
                    </span>
                  </Form.Group>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <Form.Group
                    className="mb-3 nd-req-text"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      कन्या की जन्म तिथि <span className="alert-txt">*</span>
                    </Form.Label>
                    <Form.Control
                      type="Date"
                      placeholder="DD/MM/YY"
                      className="shadow1"
                    />
                  </Form.Group>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <Form.Group
                    className="mb-3 nd-req-text"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      जन्म पंजीकरण संख्या <span className="alert-txt">*</span>
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="जन्म पंजीकरण संख्या"
                      className="shadow1"
                    />
                  </Form.Group>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <Form.Group
                    className="mb-3 nd-req-text"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label> प्रसव कहाँ करवाया गया <span className="alert-txt">*</span></Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" प्रसव कहाँ करवाया गया "
                      className="shadow1"
                    />
                  </Form.Group>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <Form.Group
                    className="mb-3 nd-req-text"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label> जिला <span className="alert-txt">*</span></Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" .जिला"
                      className="shadow1"
                    />
                  </Form.Group>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <Form.Group
                    className="mb-3 nd-req-text"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>परियोजना / ब्लॉक <span className="alert-txt">*</span></Form.Label>
                    <Form.Control
                      type="email"
                      placeholder=".परियोजना / ब्लॉक"
                      className="shadow1"
                    />
                  </Form.Group>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <Form.Group
                    className="mb-3 nd-req-text"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>आंगनवाड़ी केंद्र का नाम <span className="alert-txt">*</span></Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="आंगनवाड़ी केंद्र का नाम"
                      className="shadow1"
                    />
                    <span>
                      यदि आप सूची में अपने आंगनवाड़ी केंद्र का नाम नहीं देख पा
                      रहे हैं तो अपने ब्लॉक का नाम जांचें और यदि आवश्यक हो तो
                      अपडेट करें
                    </span>
                  </Form.Group>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <Form.Group
                    className="mb-3 nd-req-text"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>मोबाइल नंबर <span className="alert-txt">*</span></Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="मोबाइल नंबर "
                      className="shadow1"
                    />
                  </Form.Group>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <Form.Group
                    className="mb-3 nd-req-text"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>ईमेल आई.डी <span className="alert-txt">*</span> </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="ईमेल आई.डी "
                      className="shadow1"
                    />
                  </Form.Group>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <Form.Group
                    className="mb-3 nd-req-text"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label> माता/कन्या का आधार नंबर <span className="alert-txt">*</span></Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" माता/कन्या का आधार नंबर"
                      className="shadow1"
                    />
                  </Form.Group>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <Form.Group
                    className="mb-3 nd-req-text"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>सदस्यों की संख्या <span className="alert-txt">*</span></Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="सदस्यों की संख्या"
                      className="shadow1"
                    />
                    <span>परिवार के कुल सदस्यों की संख्या</span>
                  </Form.Group>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <Form.Group
                    className="mb-3 nd-req-text"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      माता / पिता / संरक्षक एवं कन्या शिशु के संयुक्त खता संख्या <span className="alert-txt">*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="माता / पिता / संरक्षक एवं कन्या शिशु के संयुक्त खता संख्या "
                      className="shadow1"
                    />
                  </Form.Group>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <Row>
                    <Col lg={8} md={8} sm={8}>
                      <Form.Group
                        className="mb-3 nd-req-text"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>.बैंक का नाम एवं शाखा <span className="alert-txt">*</span></Form.Label>
                        <Form.Control
                          type="number"
                          placeholder=".बैंक का नाम एवं शाखा"
                          className="shadow1"
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <Form.Group
                        className="mb-3 nd-req-text"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label></Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="अपने बैंक खाते का आईएफएससी कोड लिखें"
                          className="shadow1 nd-mt-6"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>

                <Col lg={4} md={4} sm={12}>
                  <Row>
                    <Col lg={8} md={8} sm={8}>
                      <Form.Group
                        className="mb-3 nd-req-text"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>बैंक का नाम एवं शाखा <span className="alert-txt">*</span></Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="बैंक का नाम एवं शाखा"
                          className="shadow1"
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <Form.Group
                        className="mb-3 nd-req-text"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label></Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="बैंक शाखा"
                          className="shadow1 nd-mt-6"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
                <div className="nd-btnn text-center">
                <Button  className="mt-3 nd-primary-btn"> सबमिट करे </Button>
                </div>
               
              </Row>
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NandaStepTwo;
