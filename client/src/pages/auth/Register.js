import "./Register.css";
import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import {
  ChevronForwardOutline,
  PeopleOutline,
  PersonAddOutline,
  PersonOutline,
  TriangleSharp,
} from "react-ionicons";
import { Link } from "react-router-dom";
import AlertMessage from "../../components/notification/AlertMessage";

function Register() {
  const [regSteps, setRegSteps] = useState(1);
  const [alert, setAlert] = useState(null);

  return (
    <Container className="mt-3">
      <Row className="justify-content-md-center">
        <Col md="5">
          <Row className="text-center mb-4 text-success">
            <TriangleSharp color={"#0e9f6e"} width={"50px"} height={"50px"} />
            <h4>Tam Giác Chiến Thắng</h4>
          </Row>

          <Row>
            <Col>
              <Card className="p-5 shadow bg-white rounded">
                {regSteps === 1 && (
                  <Card.Body>
                    <Row className="text-center mb-5">
                      <h4 className="mb-0">Đăng Ký Tài Khoản</h4>
                      <small>Chung tay vượt qua đại dịch</small>
                    </Row>
                    <Row>
                      <AlertMessage info={alert} />
                    </Row>
                    <Row className="p-1 reg-type">
                      <Col xs="auto" className="d-flex align-items-center">
                        <PersonAddOutline
                          color={"#00000"}
                          height="32px"
                          width="32px"
                        />
                      </Col>
                      <Col>
                        <span className="fw-bold">Tôi là F0</span>
                        <br />
                        <small>Tôi cần được hỗ trợ</small>
                      </Col>
                      <Col xs="auto" className="d-flex align-items-center">
                        <ChevronForwardOutline
                          color={"#00000"}
                          height="18px"
                          width="18px"
                        />
                      </Col>
                    </Row>
                    <Row className="p-1 reg-type my-3">
                      <Col xs="auto" className="d-flex align-items-center">
                        <PeopleOutline
                          color={"#00000"}
                          height="32px"
                          width="32px"
                        />
                      </Col>
                      <Col>
                        <span className="fw-bold">Tôi là Tình nguyện viên</span>
                        <br />
                        <small>Tôi muốn hỗ trợ cho F0</small>
                      </Col>
                      <Col xs="auto" className="d-flex align-items-center">
                        <ChevronForwardOutline
                          color={"#00000"}
                          height="18px"
                          width="18px"
                        />
                      </Col>
                    </Row>
                    <Row className="p-1 reg-type">
                      <Col xs="auto" className="d-flex align-items-center">
                        <PersonOutline
                          color={"#00000"}
                          height="32px"
                          width="32px"
                        />
                      </Col>
                      <Col>
                        <span className="fw-bold">Tôi là Đại diện tổ</span>
                        <br />
                        <small>Tôi muốn mở tổ hỗ trợ mới</small>
                      </Col>
                      <Col xs="auto" className="d-flex align-items-center">
                        <ChevronForwardOutline
                          color={"#00000"}
                          height="18px"
                          width="18px"
                        />
                      </Col>
                    </Row>
                    <div
                      className="text-center border-bottom my-5"
                      style={{ lineHeight: "0.1em" }}
                    >
                      <span className="bg-white px-2">
                        Bạn đã có tài khoản?
                      </span>
                    </div>
                    <Row>
                      <Link to="/login">
                        <Button variant="outline-success" className="w-100">
                          Đăng nhập
                        </Button>
                      </Link>
                    </Row>
                  </Card.Body>
                )}
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
