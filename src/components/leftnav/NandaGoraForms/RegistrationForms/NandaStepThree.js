import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "../../../../assets/css/LeftNav.css";
import Table from "react-bootstrap/Table";
import "@fortawesome/fontawesome-free"; // Font Awesome library

import DashHeader from "../../DashHeader";
import "../../../../assets/css/NandaStepOne.css";
import "../../../../assets/css/HomePage.css";

import Footer from "../../../footer/Footer";

import InnerNavigation from "../../InnerNavigation";

import { Row, Col, Button } from "react-bootstrap";
import GirlsBornStep from "./GirlsBornStep";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import { LuHeading1 } from "react-icons/lu";
const NandaStepThree = ({ buttons }) => {
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
                <div className="nd-step2">
                  <Link to="/">
                    {" "}
                    <h3>
                      {" "}
                      <FaCheck />
                      Step 1 : व्यक्तिगत जानकारी (Click to View)
                    </h3>
                  </Link>
                </div>
                <div className="nd-step2">
                  <h3>
                    {" "}
                    <FaCheck />
                    Step 2 : सदस्यों / दस्तावेज़ों की जानकारी
                  </h3>
                </div>
                <div className="nd-step1">
                  <h3>Step 3 : चल / अचल सम्पत्ति का विवरण</h3>
                </div>
                <span className="nd-step3-note">
                  नोट- यदि आवेदक उत्तराखण्ड के किसी अन्य जनपद से हो तो वहाँ की
                  भी समस्त अचल सम्मपत्ति का पूर्ण विवरण{" "}
                </span>
              </Row>
              <div className="nd-step1">
                <h3>
                  1. परिवार के सदस्यों का विवरण{" "}
                  <span className="alert-txt">*</span>{" "}
                </h3>
              </div>
              <Row className="nd-stepform-box">
                <Col lg={4} md={4} sm={12}>
                  <Form.Group
                    className="mb-3 nd-req-text nd-step-heading"
                    controlId="exampleForm.ControlInput1"
                  >
                    <h1>
                      1. सामाजिक आर्थिक जाति जनगणना में परिवार की स्थिति का
                      विवरण <span className="alert-txt">*</span>
                    </h1>
                    <Form.Select
                      aria-label="Default select example"
                      className="nd-steps-drop"
                    >
                      <option>प्रकार चुने </option>
                      <option value="स्वयं का व्यवसाय">स्वतः सम्मिलित</option>
                      <option value="अन्य कार्य">सम्मिलित नही</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <Form.Group
                    className="mb-3 nd-req-text nd-step-heading"
                    controlId="exampleForm.ControlInput1"
                  >
                    <h1 className="nd-step-heading">
                      2. बालिका के परिवार के पास उपलब्ध भूमि का प्रकार{" "}
                      <span className="alert-txt">*</span>
                    </h1>
                    <Form.Select
                      aria-label="Default select example"
                      className="nd-steps-drop"
                    >
                      <option>भूमि प्रकार चुने </option>
                      <option value="निजी क्षेत्र में सेवा">पैतृक भूमि</option>
                      <option value="कृषि कार्य">क्रय भूमि</option>
                      <option value="स्वयं का व्यवसाय">पट्टा/Lease</option>
                      <option value="अन्य कार्य">भूमिहीन</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <Form.Group
                    className="mb-3 nd-req-text nd-step-heading"
                    controlId="exampleForm.ControlInput1"
                  >
                    <h1 className="nd-step-heading">
                      3. बालिका के परिवार के पास आवासीय उपलब्ध भूमि का प्रकार{" "}
                      <span className="alert-txt">*</span>
                    </h1>
                    <Form.Select
                      aria-label="Default select example"
                      className="nd-steps-drop"
                    >
                      <option>आवासीय भूमि प्रकार चुने </option>
                      <option value="निजी क्षेत्र में सेवा">रजिस्ट्री</option>
                      <option value="कृषि कार्य">पट्टे की भूमि</option>
                      <option value="स्वयं का व्यवसाय">किराया</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="nd-stepform-box">
                <div className="nd-step-heading">
                  <h1>
                    4.सामाजिक आर्थिक जाति जनगणना में परिवार की स्थिति का विवरण{" "}
                  </h1>
                </div>
                <Col lg={4} md={4} sm={12}>
                  <Form.Group
                    className="mb-3 nd-req-text"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      1. भूमि का क्षेत्रफल (हेक्टेयर में):-{" "}
                      <span className="alert-txt">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="भूमि का क्षेत्रफल"
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
                      2. वर्तमान मूल्य () <span className="alert-txt">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="र्तमान मूल्य"
                      className="shadow1"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="nd-stepform-box">
                <div className="nd-step-heading">
                  <h1>5.आवास का विवरण </h1>
                </div>
                <Col lg={3} md={3} sm={12}>
                  <Form.Group
                    className="mb-3 nd-req-text"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      1. आवासीय भूमि:- <span className="alert-txt">*</span>
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className="nd-steps-drop"
                    >
                      <option>आवासीय भूमि प्रकार चुने </option>
                      <option value="स्वयं का व्यवसाय">कच्चा</option>
                      <option value="अन्य कार्य">पक्का</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={3} md={3} sm={12}>
                  <Form.Group
                    className="mb-3 nd-req-text"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      2. कक्षों की संख्या (){" "}
                      <span className="alert-txt">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="कक्षों की संख्या"
                      className="shadow1"
                    />
                  </Form.Group>
                </Col>
                <Col lg={3} md={3} sm={12}>
                  <Form.Group
                    className="mb-3 nd-req-text"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      3. क्षेत्रफल- <span>(हेक्टेयर में)</span> (){" "}
                      <span className="alert-txt">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="कक्षों की संख्या"
                      className="shadow1"
                    />
                  </Form.Group>
                </Col>
                <Col lg={3} md={3} sm={12}>
                  <Form.Group
                    className="mb-3 nd-req-text"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      2. वर्तमान मूल्य <span>r</span> (){" "}
                      <span className="alert-txt">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="वर्तमान मूल्य"
                      className="shadow1"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="nd-stepform-box">
                <div className="nd-step-heading">
                  <h1>6.परिवार के समस्त सदस्यों के बैंक खातों का विवरण </h1>
                </div>
                <Table responsive="sm">
                  <thead>
                    <tr>
                      <th>क्र0सं0</th>
                      <th>सदस्यों का नाम</th>
                      <th>बैंक का नाम</th>
                      <th>खाता संख्या</th>
                      <th>
                        कुल जमा धनराशि (विगत एक वर्ष में)<span>r</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <Form.Control
                          type="number"
                          placeholder="Name"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        {" "}
                        <Form.Select
                          aria-label="Default select example"
                          className="nd-steps-drop"
                        >
                          <option>बैंक का नाम </option>
                          <option value="निजी क्षेत्र में सेवा">
                            District Cooperative Bank Ltd.Chamoli
                          </option>
                          <option value="कृषि कार्य">
                            Uttarakhand Gramin Bank{" "}
                          </option>
                          <option value="स्वयं का व्यवसाय">
                            BANK OF INDIA
                          </option>
                        </Form.Select>
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="A/c.No"
                          className="shadow1 nd-mt-6"
                        />
                      </td>

                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="Amount"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <Form.Control
                          type="number"
                          placeholder="Name"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        {" "}
                        <Form.Select
                          aria-label="Default select example"
                          className="nd-steps-drop"
                        >
                          <option>बैंक का नाम </option>
                          <option value="निजी क्षेत्र में सेवा">
                            District Cooperative Bank Ltd.Chamoli
                          </option>
                          <option value="कृषि कार्य">
                            Uttarakhand Gramin Bank{" "}
                          </option>
                          <option value="स्वयं का व्यवसाय">
                            BANK OF INDIA
                          </option>
                        </Form.Select>
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="A/c.No"
                          className="shadow1 nd-mt-6"
                        />
                      </td>

                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="Amount"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <Form.Control
                          type="number"
                          placeholder="Name"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        {" "}
                        <Form.Select
                          aria-label="Default select example"
                          className="nd-steps-drop"
                        >
                          <option>बैंक का नाम </option>
                          <option value="निजी क्षेत्र में सेवा">
                            District Cooperative Bank Ltd.Chamoli
                          </option>
                          <option value="कृषि कार्य">
                            Uttarakhand Gramin Bank{" "}
                          </option>
                          <option value="स्वयं का व्यवसाय">
                            BANK OF INDIA
                          </option>
                        </Form.Select>
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="A/c.No"
                          className="shadow1 nd-mt-6"
                        />
                      </td>

                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="Amount"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <Form.Control
                          type="number"
                          placeholder="Name"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        {" "}
                        <Form.Select
                          aria-label="Default select example"
                          className="nd-steps-drop"
                        >
                          <option>बैंक का नाम </option>
                          <option value="निजी क्षेत्र में सेवा">
                            District Cooperative Bank Ltd.Chamoli
                          </option>
                          <option value="कृषि कार्य">
                            Uttarakhand Gramin Bank{" "}
                          </option>
                          <option value="स्वयं का व्यवसाय">
                            BANK OF INDIA
                          </option>
                        </Form.Select>
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="A/c.No"
                          className="shadow1 nd-mt-6"
                        />
                      </td>

                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="Amount"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Row>

              <Row className="nd-stepform-box">
                <div className="nd-step-heading">
                  <h1>7.वाहन का विवरण </h1>
                </div>
                <Table responsive="sm" className="">
                  <thead>
                    <tr>
                      <th>क्र0सं0</th>
                      <th>वाहन का मेक एंड मॉडल</th>
                      <th>वाहन की संख्या</th>
                      <th>अनुमानित मूल्य</th>
                      <th>
                      अन्य विवरण
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <Form.Control
                          type="text"
                          placeholder="वाहन का प्रकार लिखें"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="text"
                          placeholder="वाहन की संख्या लिखें"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="अनुमानित मूल्य लिखें"
                          className="shadow1 nd-mt-6"
                        />
                      </td>

                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="अन्य विवरण लिखें"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <Form.Control
                          type="text"
                          placeholder="वाहन का प्रकार लिखें"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="text"
                          placeholder="वाहन की संख्या लिखें"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="अनुमानित मूल्य लिखें"
                          className="shadow1 nd-mt-6"
                        />
                      </td>

                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="अन्य विवरण लिखें"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <Form.Control
                          type="text"
                          placeholder="वाहन का प्रकार लिखें"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="text"
                          placeholder="वाहन की संख्या लिखें"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="अनुमानित मूल्य लिखें"
                          className="shadow1 nd-mt-6"
                        />
                      </td>

                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="अन्य विवरण लिखें"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <Form.Control
                          type="text"
                          placeholder="वाहन का प्रकार लिखें"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="text"
                          placeholder="वाहन की संख्या लिखें"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="अनुमानित मूल्य लिखें"
                          className="shadow1 nd-mt-6"
                        />
                      </td>

                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="अन्य विवरण लिखें"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
              <Row className="nd-stepform-box">
                <div className="nd-step-heading">
                  <h1>8.परिवार के विगत 03 बार के बिजली के बिलों का विवरण</h1>
                </div>

                <Table responsive="sm" className="">
                  <thead>
                    <tr>
                      <th>बिजली के बिल का खाता संख्या</th>
                      <th>बिजली के बिलों को जमा करने की तिथि</th>
                      <th>	धनराशि</th>
                     
                     
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>खाता संख्या लिखें</td>
                      <td>
                        <Form.Control
                          type="Date"
                          placeholder="Name"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      
                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="भुगतान की धनराशि लिखें"
                          className="shadow1 nd-mt-6"
                        />
                      </td>

                     
                    </tr>
                    <tr>
                      <td>खाता संख्या लिखें</td>
                      <td>
                        <Form.Control
                          type="Date"
                          placeholder="Name"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      
                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="भुगतान की धनराशि लिखें"
                          className="shadow1 nd-mt-6"
                        />
                      </td>

                     
                    </tr>
                    <tr>
                      <td>खाता संख्या लिखें</td>
                      <td>
                        <Form.Control
                          type="Date"
                          placeholder="Name"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      
                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="भुगतान की धनराशि लिखें"
                          className="shadow1 nd-mt-6"
                        />
                      </td>

                     
                    </tr>
                    <tr>
                      <td>खाता संख्या लिखें</td>
                      <td>
                        <Form.Control
                          type="Date"
                          placeholder="Name"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      
                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="भुगतान की धनराशि लिखें"
                          className="shadow1 nd-mt-6"
                        />
                      </td>

                     
                    </tr>
                  </tbody>
                </Table>
              </Row>
              <Row className="nd-stepform-box">
              <div className="nd-step-heading">
                <h1>
                  9.परिवार के विगत 01 बार के पानी के बिल का विवरण{" "}
                  <span className="alert-txt">*</span>
                </h1>
              </div>
              <Table responsive="sm">
                <tbody>
                  <tr>
                    <td>
                      <Form.Group
                        className="mb-3 nd-req-text"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>
                          पानी के बिल का खाता संख्या{" "}
                          <span className="alert-txt">*</span>
                        </Form.Label>

                        <Form.Control
                          type="number"
                          placeholder="पानी के बिल का खाता संख्या"
                          className="shadow1"
                        />
                      </Form.Group>
                    </td>
                    <td>
                      <Form.Group
                        className="mb-3 nd-req-text"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>
                          पानी के बिलों को जमा करने की तिथि
                          <span className="alert-txt">*</span>
                        </Form.Label>

                        <Form.Control
                          type="Date"
                          placeholder="पिता का पैन कार्ड"
                          className="shadow1"
                        />
                      </Form.Group>
                    </td>
                    <td>
                      <Form.Group
                        className="mb-3 nd-req-text"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>
                          {" "}
                          धनराशि <span className="alert-txt">*</span>
                        </Form.Label>

                        <Form.Control
                          type="text"
                          placeholder="	धनराशि"
                          className="shadow1"
                        />
                      </Form.Group>
                    </td>
                  </tr>
                </tbody>
              </Table>
              </Row>
              <div className="nd-btnn text-center">
                <Button className="mt-3 nd-primary-btn"> सबमिट करे </Button>
              </div>
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

export default NandaStepThree;
