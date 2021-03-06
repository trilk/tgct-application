import { Link, useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { Container, Card, Row, Col, Button, Form } from "react-bootstrap";
import { TriangleSharp } from "react-ionicons";

import { AuthContext } from "../../contexts/AuthContext";
import AlertMessage from "../../components/notification/AlertMessage";

const LoginForm = () => {
  // Context
  const { loginUser } = useContext(AuthContext);
  const history = useHistory();
  const [loginSteps, setLoginSteps] = useState(1);
  const [verifycode, setVerifyCode] = useState("");

  // Local state
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const { username, password } = loginForm;
  const [alert, setAlert] = useState(null);

  const onChangeLoginForm = (event) =>
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

  const onChangeVerifyCode = (event) => setVerifyCode(event.target.value);

  const forgotPassword = (event) => {
    event.preventDefault();
    setAlert(null);

    setLoginSteps(2);
  };

  const login = async (event) => {
    event.preventDefault();

    try {
      const loginData = await loginUser(loginForm);

      if (!loginData.success) {
        setAlert({ type: "danger", message: loginData.message });
        setTimeout(() => setAlert(null), 5000);
      } else {
        history.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getVerifyCode = async (event) => {
    event.preventDefault();

    try {
      setLoginSteps(3);
    } catch (error) {
      console.log(error);
    }
  };

  const verifyCode = async (event) => {
    event.preventDefault();

    try {
      setLoginSteps(1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="mt-3">
      <Row className="justify-content-md-center">
        <Col md="5">
          <Row className="text-center mb-4 text-success">
            <TriangleSharp color={"#0e9f6e"} width={"50px"} height={"50px"} />
            <h4>Tam Gi??c Chi???n Th???ng</h4>
          </Row>

          <Row>
            <Col>
              <Card className="p-5 shadow bg-white rounded">
                {loginSteps === 1 && (
                  <Card.Body>
                    <Row className="text-center mb-5">
                      <h4 className="mb-0">????ng Nh???p</h4>
                      <small>Chung tay v?????t qua ?????i d???ch</small>
                    </Row>
                    <Row>
                      <AlertMessage info={alert} />
                    </Row>
                    <Row>
                      <Form onSubmit={login}>
                        <Form.Group className="mb-2">
                          <Form.Label
                            htmlFor="component-simple"
                            className="fw-bold m-0"
                          >
                            S??? ??i???n tho???i
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Username"
                            name="username"
                            required
                            value={username}
                            onChange={onChangeLoginForm}
                          />
                        </Form.Group>
                        <Form.Group className="mb-2">
                          <Form.Label
                            htmlFor="component-simple"
                            className="fw-bold m-0"
                          >
                            M???t kh???u
                          </Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                            value={password}
                            onChange={onChangeLoginForm}
                          />
                        </Form.Group>
                        <div className="text-center text-success mt-2 mb-3">
                          <Link onClick={forgotPassword}>Qu??n m???t kh???u?</Link>
                        </div>
                        <div className="text-center">
                          <Button
                            variant="success"
                            type="submit"
                            className="w-100"
                          >
                            ????ng nh???p
                          </Button>
                        </div>
                      </Form>
                    </Row>
                    <div
                      className="text-center border-bottom my-5"
                      style={{ lineHeight: "0.1em" }}
                    >
                      <span className="bg-white px-2">
                        B???n ch??a c?? t??i kho???n?
                      </span>
                    </div>
                    <Row>
                      <Link to="/register">
                        <Button variant="outline-success" className="w-100">
                          ????ng k?? ngay
                        </Button>
                      </Link>
                    </Row>
                  </Card.Body>
                )}
                {loginSteps === 2 && (
                  <Card.Body>
                    <Row className="text-center mb-4">
                      <h4 className="mb-0">Qu??n M???t Kh???u?</h4>
                      <small>
                        Vui l??ng nh???p s??? ??i???n tho???i ????? nh???n m?? x??c th???c c???a b???n
                      </small>
                    </Row>
                    <Row>
                      <AlertMessage info={alert} />
                    </Row>
                    <Row>
                      <Form onSubmit={getVerifyCode}>
                        <Form.Group className="mb-2">
                          <Form.Label
                            htmlFor="component-simple"
                            className="fw-bold m-0"
                          >
                            S??? ??i???n tho???i
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Username"
                            name="username"
                            required
                            value={username}
                            onChange={onChangeLoginForm}
                          />
                        </Form.Group>

                        <div className="text-center mt-4">
                          <Button
                            variant="success"
                            type="submit"
                            className="w-100"
                          >
                            Nh???n m?? x??c th???c
                          </Button>
                        </div>
                      </Form>
                    </Row>
                  </Card.Body>
                )}
                {loginSteps === 3 && (
                  <Card.Body>
                    <Row className="text-center mb-4">
                      <h4 className="mb-0">Nh???p M?? X??c Th???c</h4>
                      <small>
                        Vui l??ng nh???p m?? x??c th???c ???? ???????c g???i ?????n s??? ??i???n tho???i{" "}
                        <span className="text-success">
                          {loginForm.username}
                        </span>
                      </small>
                    </Row>
                    <Row>
                      <AlertMessage info={alert} />
                    </Row>
                    <Row>
                      <Form onSubmit={verifyCode}>
                        <Form.Group className="mb-2">
                          <Form.Label
                            htmlFor="component-simple"
                            className="fw-bold m-0"
                          >
                            M?? x??c th???c
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="M?? x??c th???c"
                            name="verifycode"
                            value={verifycode}
                            required
                            onChange={onChangeVerifyCode}
                          />
                        </Form.Group>

                        <div className="text-center mt-4">
                          <Button
                            variant="success"
                            type="submit"
                            className="w-100 mb-2"
                          >
                            X??c nh???n
                          </Button>
                          <Link className="text-success">G???i l???i m??</Link>
                        </div>
                      </Form>
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
};

export default LoginForm;
