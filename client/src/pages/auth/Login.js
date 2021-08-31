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
            <h4>Tam Giác Chiến Thắng</h4>
          </Row>

          <Row>
            <Col>
              <Card className="p-5 shadow bg-white rounded">
                {loginSteps === 1 && (
                  <Card.Body>
                    <Row className="text-center mb-5">
                      <h4 className="mb-0">Đăng Nhập</h4>
                      <small>Chung tay vượt qua đại dịch</small>
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
                            Số điện thoại
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
                            Mật khẩu
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
                          <Link onClick={forgotPassword}>Quên mật khẩu?</Link>
                        </div>
                        <div className="text-center">
                          <Button
                            variant="success"
                            type="submit"
                            className="w-100"
                          >
                            Đăng nhập
                          </Button>
                        </div>
                      </Form>
                    </Row>
                    <div
                      className="text-center border-bottom my-5"
                      style={{ lineHeight: "0.1em" }}
                    >
                      <span className="bg-white px-2">
                        Bạn chưa có tài khoản?
                      </span>
                    </div>
                    <Row>
                      <Link to="/register">
                        <Button variant="outline-success" className="w-100">
                          Đăng ký ngay
                        </Button>
                      </Link>
                    </Row>
                  </Card.Body>
                )}
                {loginSteps === 2 && (
                  <Card.Body>
                    <Row className="text-center mb-4">
                      <h4 className="mb-0">Quên Mật Khẩu?</h4>
                      <small>
                        Vui lòng nhập số điện thoại để nhận mã xác thực của bạn
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
                            Số điện thoại
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
                            Nhận mã xác thực
                          </Button>
                        </div>
                      </Form>
                    </Row>
                  </Card.Body>
                )}
                {loginSteps === 3 && (
                  <Card.Body>
                    <Row className="text-center mb-4">
                      <h4 className="mb-0">Nhập Mã Xác Thực</h4>
                      <small>
                        Vui lòng nhập mã xác thực đã được gửi đến số điện thoại{" "}
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
                            Mã xác thực
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Mã xác thực"
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
                            Xác nhận
                          </Button>
                          <Link className="text-success">Gửi lại mã</Link>
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
