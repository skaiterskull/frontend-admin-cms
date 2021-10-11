import React, { useState, useEffect } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin, autoLoginAction } from "../../pages/admin-user/userAction";
import { Alert, Spinner } from "react-bootstrap";

const initialState = {
  email: "",
  password: "",
};

export const OtpRequestForm = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const { isPending, userResp, isLoggedIn } = useSelector(
    (state) => state.user
  );
  const from = location?.state?.from?.pathname || "/dashboard";
  const [isLoading, setIsLoading] = useState(true);
  const [loginInfo, setLoginInfo] = useState(initialState);
  const pageLoading = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    !isLoggedIn && dispatch(autoLoginAction());
    isLoggedIn && history.replace(from);
    setTimeout(pageLoading, 3000);
  }, [isLoggedIn, history, from, dispatch]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!loginInfo.email || !loginInfo.password) {
      return alert("Please enter your email and password");
    }
    dispatch(adminLogin(loginInfo));
  };

  return (
    <div>
      <Card className="p-5 mt-4">
        <h1>Request OTP</h1>
        {isPending && <Spinner variant="primary" animation="border" />}
        {userResp?.message && (
          <Alert variant={userResp.status === "success" ? "success" : "danger"}>
            {userResp.message}
          </Alert>
        )}

        <hr />
        <Form onSubmit={handleOnSubmit}>
          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="4">
              Email *
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                onChange={handleOnChange}
              />
            </Col>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button type="submit" variant="primary" size="lg">
              Login
            </Button>
          </div>
        </Form>
        <a className="mt-2 text-end" href="/">
          Login Now
        </a>
      </Card>
    </div>
  );
};
