import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "../../assets/css/MainHome.css";
import "../../assets/css/AdminBanner.css";
import Login from "../../assets/images/login.png";

// import { Link } from "react-router-dom";

function AdminBanner() {
  return (
  
      <div className=" container-fluid nd-login-banner">
        <Container>
          <Row className="nd-admin-login">
            <Col
              lg={6}
              md={6}
              sm={12}
              className="mt-5 nd-main-col nd-main-data"
            >
              <div>
                <p className="nd-subdata mt-4">नंदा गौरा योजना</p>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} className="mt-5 nd-main-login">
              <Card className="mt-4 nd-admin-form">
                <Form className="nd-form">
                  <h1 className="nd-login-title ">
                    <img src={Login} alt="sign" className="p-2"></img>Login
                    Pannel
                  </h1>

                  <Row>
                    <Col lg={4} md={6} sm={3}>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <label class="form-check-label" for="flexRadioDefault2">
                        Directorate Login
                        </label>
                      </div>
                    </Col>
                    <Col lg={4} md={6} sm={3}>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                         
                          checked
                        />
                        <label class="form-check-label" for="flexRadioDefault2">
                        Technical Login
                        </label>
                      </div>
                    </Col>
                    <Col lg={4} md={6} sm={3}>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                         
                          checked
                        />
                        <label class="form-check-label" for="flexRadioDefault2">
                        District Probation Login
                        </label>
                      </div>
                    </Col>
                    <Col lg={4} md={6} sm={3} className="nd-form-check">
                      <div class="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          checked
                        />
                        <label class="form-check-label" for="flexRadioDefault2">
                        District Login (DPO)
                        </label>
                      </div>
                    </Col>
                    <Col lg={4} md={6} sm={3} className="nd-form-check">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          checked
                        />
                        <label class="form-check-label" for="flexRadioDefault2">
                        Project login
                        </label>
                      </div>
                    </Col>
                    <Col lg={4} md={6} sm={3} className="nd-form-check">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          checked
                        />
                        <label class="form-check-label" for="flexRadioDefault2">
                        Sector login
                        </label>
                      </div>
                    </Col>
                  </Row>
                  <div className="nd-login-title"><h1>Directorate Login</h1></div>
                  
                  <Form.Group
                    className="mb-3 mt-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="nd-form-label">
                    Login type
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Login type"
                      name="phone_no"
                      className="nd-form-control"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="nd-form-label">
                     Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder=" Password"
                      name="phone_no"
                      className="nd-form-control"
                    />
                  </Form.Group>
                  <div className="nd-admin-btn">
                  <Button className="nd-primary" >
                          Login
                        </Button>
                        </div>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
  
  );
}

export default AdminBanner;
