import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "../../assets/css/MainHome.css";
import News from "../../assets/images/news.png";
import Twelve from "../../assets/images/12thpass.png";
import Login from "../../assets/images/login.png";
import UserRegistration from "../modal/UserRegistration";
import ForgotPassword from "../modal/ForgotPassword";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

function UserLogin() {
  return (
    <div className="container-fluid">
      <div className="nd-main-banner">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12} className="mt-5 nd-main-col nd-main-data">
              <div className="nd-update">
                <p>
                 <img src={News} alt="news"></img> नंदा गौरा योजना के तहत 12वीं पासआउट 2024 के लिए नए आवेदन केवल
                  30-नवंबर-2024 तक भरे जा सकते{" "}
                </p>
              </div>
              <div className="nd-subupdate">
                <p>
                 <img src={Twelve} alt="12वीं पासआउट 2024"></img> 12वीं पासआउट 2024 के लिए नए आवेदन की अंतिम तिथि 20 दिसंबर 2024
                  तक बढ़ाने के संबंध{" "}
                </p>
              </div>
              <div>
                <p className="nd-subdata mt-4">नंदा गौरा योजना</p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12} className="mt-5 nd-main-login">
              <Card className="mt-4 p-4 nd-Login-form">
                <p className="text-center nd-login-title">
                आवेदन करने हेतु पोर्टल खुला हुआ है
                </p>
                <p className="text-center nd-login-subtitle">आवेदक/उपयोगकर्ता लॉगिन फॉर्म</p>

                <Form
                  className="nd-form"
                 
                >
                  <h1 className="nd-sign "><img src={Login} alt="sign"className="p-2"></img>साइन इन करें</h1>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="nd-form-label">पंजीकृत मोबाइल नंबर</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="पंजीकृत मोबाइल नंबर"
                      name="phone_no" className="nd-form-control"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="nd-form-label">आपका पासवर्ड</Form.Label>

                    <Form.Control placeholder="आपका पासवर्ड" name="user_pass" className="nd-form-control" />
                    <span className="shoowpass"></span>
                  </Form.Group>

                  <Form.Group className="text-center ">
                    <Button
                      type="submit"
                      className="mt-3 nd-primary-btn"
                      name="login"
                    >
                   
                    <span     
                        data-bs-toggle="tooltip"
                        title="SingIn"
                        name="login"
                      >
                       <Link to="../UserDashboard" className="nd-link-page">साइन इन</Link>
                      </span>
                    </Button>
                   
                  </Form.Group>

                <Row className="mt-3">
                  <Col lg={6} md={6} sm={6} className="nd-user-regis">
                 <ForgotPassword/>
                  </Col>
                  <Col lg={6} md={6} sm={6} className="nd-user-regis">
                  {/* <p>नए आवेदक/उपयोगकर्त अभी पंजीकरण करें</p> */}
                  <UserRegistration />
                  </Col>
                  <Col lg={12}><p className="text-center">Login/Reg. Tutorial</p></Col>
                </Row>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  );
}

export default UserLogin;
