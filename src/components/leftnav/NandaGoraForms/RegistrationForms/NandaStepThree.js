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
                <Row>
                  <div className="nd-step2">
                    <Link to="/">
                      {" "}
                      <h3>  <FaCheck />Step 1 : व्यक्तिगत जानकारी (Click to View)</h3>
                    </Link>
                  </div>
                  <div className="nd-step2">
                    <h3>  <FaCheck />Step 2 : सदस्यों / दस्तावेज़ों की जानकारी</h3>
                  </div>
                  <div className="nd-step1">
                    <h3>Step 3 : चल / अचल सम्पत्ति का विवरण</h3>
                  </div>
                  <span className="nd-step3-note">नोट- यदि आवेदक उत्तराखण्ड के किसी अन्य जनपद से हो तो वहाँ की भी समस्त अचल सम्मपत्ति का पूर्ण विवरण -</span>
                </Row>
                  <div className="nd-step1">
                    <h3>
                     1. परिवार के सदस्यों का विवरण{" "}
                     <span className="alert-txt">*</span>{" "}
                    </h3>
                    </div>
                    <Table responsive="sm">
                  <thead>
                    
                  </thead>
                  <tbody>
                    <tr>
                      <td>सामाजिक आर्थिक जाति जनगणना में परिवार की स्थिति का विवरण -</td>
                      <td>
                        <Form.Select aria-label="Default select example" className="nd-steps-drop">
                          <option>व्यवसाय चुनें</option>
                          <option value="निजी क्षेत्र में सेवा">निजी क्षेत्र में सेवा</option>
                          <option value="कृषि कार्य">कृषि कार्य</option>
                          <option value="स्वयं का व्यवसाय">स्वयं का व्यवसाय</option>
                          <option value="अन्य कार्य">अन्य कार्य</option>
                        </Form.Select>
                      </td>
                      
                     
                      
                    </tr>
                    <tr>
                      <td>पिता का व्यवसाय / कार्य का विवरण</td>
                      <td>
                        <Form.Select aria-label="Default select example" className="nd-steps-drop">
                          <option>व्यवसाय चुनें</option>
                          <option value="निजी क्षेत्र में सेवा">निजी क्षेत्र में सेवा</option>
                          <option value="कृषि कार्य">कृषि कार्य</option>
                          <option value="स्वयं का व्यवसाय">स्वयं का व्यवसाय</option>
                          <option value="अन्य कार्य">अन्य कार्य</option>
                        </Form.Select>
                      </td>
                      
                     
                      
                    </tr>
                  
                  </tbody>
                </Table>

                <Table responsive="sm">
                  <thead>
                    <tr>
                      <th>क्र0सं0</th>
                      <th>सदस्यों का नाम</th>
                      <th>कन्या से संबंधित</th>
                      <th>व्यवसाय / शिक्षा</th>
                      <th>आधार कार्ड नंबर</th>
                      <th>मोबाइल नंबर</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <Form.Control
                          type="number"
                          placeholder="Enter phone number"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="Enter phone number"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="Enter phone number"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="Enter phone number"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="Enter phone number"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <Form.Control
                          type="number"
                          placeholder="Enter phone number"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="number"
                          placeholder="Enter phone number"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="number"
                          placeholder="Enter phone number"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="number"
                          placeholder="Enter phone number"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="number"
                          placeholder="Enter phone number"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <Form.Control
                          type="number"
                          placeholder="Enter phone number"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="number"
                          placeholder="Enter phone number"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="number"
                          placeholder="Enter phone number"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="number"
                          placeholder="Enter phone number"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="number"
                          placeholder="Enter phone number"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <Form.Control
                          type="number"
                          placeholder="Enter phone number"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="number"
                          placeholder="Enter phone number"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="number"
                          placeholder="Enter phone number"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="number"
                          placeholder="Enter phone number"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="number"
                          placeholder="Enter phone number"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
               <div className="nd-step1">
                <h3>2.व्यवसाय का विवरण  <span className="alert-txt">*</span></h3>
               </div>
                <Table responsive="sm">
                  <thead>
                    <tr>
                      <th colSpan={2} className="text-center">
                        व्यवसाय / कार्य का विवरण
                      </th>

                      <th>
                        ग्रामीण क्षेत्रों की दशा में मनरेगा जॉब कार्ड नंबर
                      </th>
                    
                      <th>
                        विगत 03 वर्षों में प्राप्त हो रोज़गार दिवसों की संख्या
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>पिता का व्यवसाय / कार्य का विवरण</td>
                      <td>
                        <Form.Select aria-label="Default select example" className="nd-steps-drop">
                          <option>व्यवसाय चुनें</option>
                          <option value="निजी क्षेत्र में सेवा">निजी क्षेत्र में सेवा</option>
                          <option value="कृषि कार्य">कृषि कार्य</option>
                          <option value="स्वयं का व्यवसाय">स्वयं का व्यवसाय</option>
                          <option value="अन्य कार्य">अन्य कार्य</option>
                        </Form.Select>
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="मनरेगा जॉब कार्ड नंबर"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="0"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                     
                      
                    </tr>
                    <tr>
                      <td>पिता का व्यवसाय / कार्य का विवरण</td>
                      <td>
                        <Form.Select aria-label="Default select example" className="nd-steps-drop">
                          <option>व्यवसाय चुनें</option>
                          <option value="निजी क्षेत्र में सेवा">निजी क्षेत्र में सेवा</option>
                          <option value="कृषि कार्य">कृषि कार्य</option>
                          <option value="स्वयं का व्यवसाय">स्वयं का व्यवसाय</option>
                          <option value="अन्य कार्य">अन्य कार्य</option>
                        </Form.Select>
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="मनरेगा जॉब कार्ड नंबर"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="0"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                     
                      
                    </tr>
                    <tr>
                      <td>पिता का व्यवसाय / कार्य का विवरण</td>
                      <td>
                        <Form.Select aria-label="Default select example" className="nd-steps-drop">
                          <option>व्यवसाय चुनें</option>
                          <option value="निजी क्षेत्र में सेवा">निजी क्षेत्र में सेवा</option>
                          <option value="कृषि कार्य">कृषि कार्य</option>
                          <option value="स्वयं का व्यवसाय">स्वयं का व्यवसाय</option>
                          <option value="अन्य कार्य">अन्य कार्य</option>
                        </Form.Select>
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="मनरेगा जॉब कार्ड नंबर"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="0"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                     
                      
                    </tr>
                    <tr>
                      <td>पिता का व्यवसाय / कार्य का विवरण</td>
                      <td>
                        <Form.Select aria-label="Default select example" className="nd-steps-drop">
                          <option>व्यवसाय चुनें</option>
                          <option value="निजी क्षेत्र में सेवा">निजी क्षेत्र में सेवा</option>
                          <option value="कृषि कार्य">कृषि कार्य</option>
                          <option value="स्वयं का व्यवसाय">स्वयं का व्यवसाय</option>
                          <option value="अन्य कार्य">अन्य कार्य</option>
                        </Form.Select>
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="मनरेगा जॉब कार्ड नंबर"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="0"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                     
                      
                    </tr>
                  </tbody>
                </Table>
                <div className="nd-step1">
                <h3>3.आय का विवरण  <span className="alert-txt">*</span></h3>
               </div>
                <Table responsive="sm">
                 
                  <tbody>
                    <tr>
                     
                    <td>
                      <Form.Group
                        className="mb-3 nd-req-text"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>कन्या शिशु के परिवार/अभिभावक की वार्षिक आय(आय प्रमाण पत्र के आधार पर)<span className="alert-txt">*</span></Form.Label>
                        
                        <Form.Control
                          type="number"
                          placeholder="कन्या शिशु के परिवार/अभिभावक की वार्षिक आय(आय प्रमाण पत्र के आधार पर)"
                          className="shadow1 nd-required"
                        />
                      </Form.Group>
                      </td>
                     
                      <td>
                      <Form.Group
                        className="mb-3 nd-req-text"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>सक्षम अधिकारी द्वारा निर्गत आय प्रमाण पत्र का क्रमांक <span className="alert-txt">*</span></Form.Label>
                        
                        <Form.Control
                          type="number"
                          placeholder="माता का पैन कार्ड"
                         className="shadow1 nd-required"
                        />
                      </Form.Group>
                      </td>
                      <td>
                      <Form.Group
                        className="mb-3 nd-req-text"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>आय प्रमाण पत्र जारी करने की दिनांक <span className="alert-txt">*</span></Form.Label>
                        
                        <Form.Control
                          type="date"
                          placeholder="सक्षम अधिकारी द्वारा निर्गत आय प्रमाण पत्र का क्रमांक"
                           className="shadow1 nd-required"
                        />
                      </Form.Group>
                      </td>
                      
                     
                      
                    </tr>
                   

                  </tbody>
                </Table>
                <div className="nd-step1">
                <h3>4. बिजली/पानी का कनेक्शन उपलब्ध है  <span className="alert-txt">*</span></h3>
               </div>
                <Table responsive="sm">
                  <thead>
                    
                  </thead>
                  <tbody>
                    <tr>
                     
                      <td>
                      <Form.Group
                        className="mb-3 nd-req-text"
                        controlId="exampleForm.ControlInput1"
                     />
                      <Form.Label>बिजली का कनेक्शन उपलब्ध है <span className="alert-txt">*</span></Form.Label>
                        <Form.Select aria-label="Default select example" className="nd-steps-drop">
                          <option>व्यवसाय चुनें</option>
                          <option value="निजी क्षेत्र में सेवा">निजी क्षेत्र में सेवा</option>
                          <option value="कृषि कार्य">कृषि कार्य</option>
                          <option value="स्वयं का व्यवसाय">स्वयं का व्यवसाय</option>
                          <option value="अन्य कार्य">अन्य कार्य</option>
                        </Form.Select>
                      </td>
                      <td>
                      <Form.Group
                        className="mb-3 nd-req-text"
                        controlId="exampleForm.ControlInput1"
                     />
                      <Form.Label>पानी का कनेक्शन उपलब्ध है <span className="alert-txt">*</span></Form.Label>
                        <Form.Select aria-label="Default select example" className="nd-steps-drop">
                          <option>व्यवसाय चुनें</option>
                          <option value="निजी क्षेत्र में सेवा">निजी क्षेत्र में सेवा</option>
                          <option value="कृषि कार्य">कृषि कार्य</option>
                          <option value="स्वयं का व्यवसाय">स्वयं का व्यवसाय</option>
                          <option value="अन्य कार्य">अन्य कार्य</option>
                        </Form.Select>
                      </td>
                      
                      
                     
                      
                    </tr>
                    <tr>
                     
                      <td>
                      <Form.Group
                        className="mb-3 nd-req-text"
                        controlId="exampleForm.ControlInput1"
                     />
                      <Form.Label>बिजली का कनेक्शन उपलब्ध है <span className="alert-txt">*</span></Form.Label>
                        <Form.Select aria-label="Default select example" className="nd-steps-drop">
                          <option>व्यवसाय चुनें</option>
                          <option value="निजी क्षेत्र में सेवा">निजी क्षेत्र में सेवा</option>
                          <option value="कृषि कार्य">कृषि कार्य</option>
                          <option value="स्वयं का व्यवसाय">स्वयं का व्यवसाय</option>
                          <option value="अन्य कार्य">अन्य कार्य</option>
                        </Form.Select>
                      </td>
                      <td>
                      <Form.Group
                        className="mb-3 nd-req-text"
                        controlId="exampleForm.ControlInput1"
                     />
                      <Form.Label>पानी का कनेक्शन उपलब्ध है <span className="alert-txt">*</span></Form.Label>
                        <Form.Select aria-label="Default select example"className="nd-steps-drop">
                          <option>व्यवसाय चुनें</option>
                          <option value="निजी क्षेत्र में सेवा">निजी क्षेत्र में सेवा</option>
                          <option value="कृषि कार्य">कृषि कार्य</option>
                          <option value="स्वयं का व्यवसाय">स्वयं का व्यवसाय</option>
                          <option value="अन्य कार्य">अन्य कार्य</option>
                        </Form.Select>
                      </td>
                      
                      
                     
                      
                    </tr>
                   
                  
                  </tbody>
                </Table>
                <div className="nd-step1">
                <h3>5.आय का विवरण <span className="alert-txt">*</span></h3>
               </div>
                <Table responsive="sm">
                 
                  <tbody>
                    <tr>
                     
                      <td>
                      <Form.Group
                        className="mb-3 nd-req-text"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>माता का पैन कार्ड <span className="alert-txt">*</span></Form.Label>
                        
                        <Form.Control
                          type="number"
                          placeholder="माता का पैन कार्ड"
                          className="shadow1"
                        />
                      </Form.Group>
                      </td>
                      <td>
                      <Form.Group
                        className="mb-3 nd-req-text"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>पिता का पैन कार्ड<span className="alert-txt">*</span></Form.Label>
                        
                        <Form.Control
                          type="number"
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
                        <Form.Label>	अभिभावक का पैन कार्ड नंबर  <span className="alert-txt">*</span></Form.Label>
                        
                        <Form.Control
                          type="text"
                          placeholder="	अभिभावक का पैन कार्ड नंबर"
                          className="shadow1"
                        />
                      </Form.Group>
                      </td>
                    </tr>
                  </tbody>
                 
                </Table>
                <div className="nd-btnn text-center">
                  <Button className="mt-3 nd-primary-btn"> सबमिट करे </Button>
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

export default NandaStepThree;
