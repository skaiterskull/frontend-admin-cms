import React, { useState } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { resetPasswordAction } from "../../pages/admin-user/userAction";
import { Alert, Spinner, ListGroup } from "react-bootstrap";

const initialState = {
  otp: undefined,
  password: "",
  confirmPassword: "",
};

const initialError = {
  isMatched: false,
  hasNumber: false,
  hasUpper: false,
  hasLower: false,
  isLengthy: false,
  hasSpecialChar: false,
};

export const ResetPasswordForm = () => {
  const dispatch = useDispatch();

  const [userPassword, setUserPassword] = useState(initialState);
  const [passError, setPassError] = useState(initialError);

  const { isPending, userResp, passResetEmail } = useSelector(
    (state) => state.user
  );

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const { password, confirmPassword } = userPassword;

    let isMatched = false;
    if (name === "password") {
      isMatched = confirmPassword === value;
      setPassError({ ...passError, isMatched });
    }

    if (name === "confirmPassword") {
      isMatched = password === value;
      const isLengthy = value.length >= 6;
      const hasUpper = /[A-Z]/.test(value);
      const hasLower = /[a-z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      const hasSpecialChar = /[!,@,#,$,%]/.test(value);
      setPassError({
        ...passError,
        isMatched,
        isLengthy,
        hasUpper,
        hasLower,
        hasNumber,
        hasSpecialChar,
      });
    }

    setUserPassword({ ...userPassword, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { otp, password } = userPassword;
    const obj = { otp, password, email: passResetEmail };
    dispatch(resetPasswordAction(obj));
  };

  return (
    <div>
      <Card className="p-5 mt-4">
        <h1>Reset Password </h1>
        {isPending && <Spinner variant="primary" animation="border" />}
        {userResp?.message && (
          <Alert variant={userResp.status === "Success" ? "success" : "danger"}>
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
                value={passResetEmail}
                required
                disabled
                onChange={handleOnChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="4">
              OTP *
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="number"
                name="otp"
                placeholder="000000"
                required
                onChange={handleOnChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 mt-3">
            <Col
              sm="4"
              className="d-flex align-items-center justify-content-start"
            >
              <Form.Label>New Password</Form.Label>
            </Col>
            <Col sm="8">
              <Form.Control
                type="password"
                name="password"
                // value={userPassword.password}
                placeholder=" New Password"
                required
                onChange={handleOnChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 mt-3">
            <Col
              sm="4"
              className="d-flex align-items-center justify-content-start"
            >
              <Form.Label>Confirm Password</Form.Label>
            </Col>
            <Col sm="8">
              <Form.Control
                type="password"
                name="confirmPassword"
                // value={userPassword.confirmPassword}
                placeholder="Confirm Password"
                required
                onChange={handleOnChange}
              />
            </Col>
          </Form.Group>
          <ListGroup>
            <ListGroup.Item
              variant={passError.isMatched ? "success" : "danger"}
            >
              Password does not match
            </ListGroup.Item>
            <ListGroup.Item
              variant={passError.isLengthy ? "success" : "danger"}
            >
              Minimum 6 characters
            </ListGroup.Item>
            <ListGroup.Item variant={passError.hasUpper ? "success" : "danger"}>
              Uppercase
            </ListGroup.Item>
            <ListGroup.Item variant={passError.hasLower ? "success" : "danger"}>
              Lowercase
            </ListGroup.Item>
            <ListGroup.Item
              variant={passError.hasNumber ? "success" : "danger"}
            >
              Number
            </ListGroup.Item>
            <ListGroup.Item
              variant={passError.hasSpecialChar ? "success" : "danger"}
            >
              One of special character ! @ # $ % (
            </ListGroup.Item>
          </ListGroup>

          <div className="d-grid gap-2 mt-3">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={Object.values(passError).includes(false)}
            >
              Update Password
            </Button>
          </div>
        </Form>
        <div className="mt-2 text-end">
          <a href="/">Login Now</a>
        </div>
      </Card>
    </div>
  );
};
