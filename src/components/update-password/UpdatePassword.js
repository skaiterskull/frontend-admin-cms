import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { updateUserPasswordAction } from "../../pages/admin-user/userAction";
import { Spinner, Alert, ListGroup } from "react-bootstrap";

const initialState = {
  currentPassword: "",
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

export const UpdatePassword = () => {
  const { user, isPending, userResp } = useSelector((state) => state.user);
  const [userPassword, setUserPassword] = useState(initialState);
  const [passError, setPassError] = useState(initialError);
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { password, currentPassword } = userPassword;
    dispatch(updateUserPasswordAction({ password, currentPassword }));
  };

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
  return (
    <Form onSubmit={handleOnSubmit}>
      {isPending && <Spinner variant="primary" animation="border" />}
      {userResp?.message && (
        <Alert variant={userResp.status === "Success" ? "success" : "danger"}>
          {userResp.message}
        </Alert>
      )}
      <Form.Group as={Row} className="mb-2 mt-2">
        <Col sm="4" className="d-flex align-items-center justify-content-start">
          <Form.Label>Current Password</Form.Label>
        </Col>
        <Col sm="8">
          <Form.Control
            type="password"
            name="currentPassword"
            value={userPassword.currentPassword}
            placeholder="Current Password"
            required
            onChange={handleOnChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2 mt-2">
        <Col sm="4" className="d-flex align-items-center justify-content-start">
          <Form.Label>New Password</Form.Label>
        </Col>
        <Col sm="8">
          <Form.Control
            type="password"
            name="password"
            value={userPassword.password}
            placeholder=" New Password"
            required
            onChange={handleOnChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2 mt-2">
        <Col sm="4" className="d-flex align-items-center justify-content-start">
          <Form.Label>Confirm Password</Form.Label>
        </Col>
        <Col sm="8">
          <Form.Control
            type="password"
            name="confirmPassword"
            value={userPassword.confirmPassword}
            placeholder="Confirm Password"
            required
            onChange={handleOnChange}
          />
        </Col>
      </Form.Group>

      <ListGroup>
        <ListGroup.Item variant={passError.isMatched ? "success" : "danger"}>
          Password does not match
        </ListGroup.Item>
        <ListGroup.Item variant={passError.isLengthy ? "success" : "danger"}>
          Minimum 6 characters
        </ListGroup.Item>
        <ListGroup.Item variant={passError.hasUpper ? "success" : "danger"}>
          Uppercase
        </ListGroup.Item>
        <ListGroup.Item variant={passError.hasLower ? "success" : "danger"}>
          Lowercase
        </ListGroup.Item>
        <ListGroup.Item variant={passError.hasNumber ? "success" : "danger"}>
          Number
        </ListGroup.Item>
        <ListGroup.Item
          variant={passError.hasSpecialChar ? "success" : "danger"}
        >
          One of special character ! @ # $ % (
        </ListGroup.Item>
      </ListGroup>

      {/* submit buttom */}
      <Button
        className="mt-3"
        variant="danger"
        type="submit"
        size="lg"
        disabled={Object.values(passError).includes(false)}
        onClick={handleOnSubmit}
      >
        Update Password
      </Button>
    </Form>
  );
};
