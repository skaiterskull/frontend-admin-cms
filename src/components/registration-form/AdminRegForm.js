import React from "react";
import { useState } from "react";
import {
  Form,
  Row,
  Col,
  Card,
  InputGroup,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../pages/admin-user/userAction";

const user = {
  fname: "",
  lname: "",
  dob: "",
  email: "",
  confirmPass: "",
  password: "",
  phone: "",
  address: "",
  gender: "",
};

const AdminRegForm = () => {
  const dispatch = useDispatch();
  const { isPending, userResp } = useSelector((state) => state.user);
  const [newUser, setNewUser] = useState(user);
  const [passErr, setPassErr] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    if (passErr && name === "confirmPass") {
      setPassErr("");
    }

    setNewUser({ ...newUser, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { password } = newUser;
    const { confirmPass, ...userInfo } = newUser;
    if (password !== confirmPass) {
      return setPassErr("Password does not match");
    }

    dispatch(createUser(userInfo));
    if (userResp.status === "success") {
    }
  };

  return (
    <div>
      <h1 className="text-center">Admin User Registration</h1>

      <Card className="p-4 mt-3">
        {isPending && (
          <Spinner
            className="text-center"
            variant="primary"
            animation="border"
          />
        )}
        {userResp?.message && (
          <Alert
            style={{ maxWidth: "400px" }}
            variant={userResp.status === "Success" ? "success" : "danger"}
            className="text-center"
          >
            {userResp.message}
          </Alert>
        )}
        {passErr && (
          <Alert variant="danger" className="text-center">
            {passErr}
          </Alert>
        )}
        {/* fname */}
        <Form.Group as={Row} className="mb-2 mt-2">
          <Col
            sm="4"
            className="d-flex align-items-center justify-content-start"
          >
            <Form.Label>First Name *</Form.Label>
          </Col>
          <Col sm="8">
            <Form.Control
              type="text"
              name="fname"
              placeholder="First name"
              required
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group>
        {/* lname */}
        <Form.Group as={Row} className="mb-2 mt-2">
          <Col
            sm="4"
            className="d-flex align-items-center justify-content-start"
          >
            <Form.Label>Last Name *</Form.Label>
          </Col>
          <Col sm="8">
            <Form.Control
              type="text"
              name="lname"
              placeholder="Last Name"
              required
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group>
        {/* DOB */}
        <Form.Group as={Row} className="mb-2 mt-2">
          <Col
            sm="4"
            className="d-flex align-items-center justify-content-start"
          >
            <Form.Label>DOB</Form.Label>
          </Col>
          <Col sm="8">
            <Form.Control type="date" name="dob" onChange={handleOnChange} />
          </Col>
        </Form.Group>
        {/* email */}
        <Form.Group as={Row} className="mb-2 mt-2">
          <Col
            sm="4"
            className="d-flex align-items-center justify-content-start"
          >
            <Form.Label>Email *</Form.Label>
          </Col>
          <Col sm="8">
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group>
        {/* password */}
        <Form.Group as={Row} className="mb-2 mt-2">
          <Col
            sm="4"
            className="d-flex align-items-center justify-content-start"
          >
            <Form.Label>Password *</Form.Label>
          </Col>
          <Col sm="8">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group>
        {/* confirm password */}
        <Form.Group as={Row} className="mb-2 mt-2">
          <Col
            sm="4"
            className="d-flex align-items-center justify-content-start"
          >
            <Form.Label>Confirm Password *</Form.Label>
          </Col>
          <Col sm="8">
            <Form.Control
              type="password"
              name="confirmPass"
              placeholder="Confirm Password"
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group>

        {/* phone */}
        <Form.Group as={Row} className="mb-2 mt-2">
          <Col
            sm="4"
            className="d-flex align-items-center justify-content-start"
          >
            <Form.Label>Phone</Form.Label>
          </Col>
          <Col sm="8">
            <Form.Control
              name="phone"
              placeholder="Phone Number"
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group>
        {/* address */}
        <Form.Group as={Row} className="mb-2 mt-2">
          <Col
            sm="4"
            className="d-flex align-items-center justify-content-start"
          >
            <Form.Label>Address</Form.Label>
          </Col>
          <Col sm="8">
            <Form.Control
              name="address"
              placeholder="Address"
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group>
        {/* gender */}
        <Form.Group as={Row} className="mb-2 mt-2">
          <Col
            xs="4"
            className="d-flex align-items-center justify-content-start"
          >
            <Form.Label>Gender</Form.Label>
          </Col>
          <Col xs="4">
            <InputGroup>
              <InputGroup.Radio
                name="gender"
                value="male"
                aria-label="Male"
                onChange={handleOnChange}
              />
              <Form.Label className="m-1">Male</Form.Label>
            </InputGroup>
          </Col>
          <Col xs="4">
            <InputGroup>
              <InputGroup.Radio
                name="gender"
                value="female"
                aria-label="Female"
                onChange={handleOnChange}
              />
              <Form.Label className="m-1">Female</Form.Label>
            </InputGroup>
          </Col>
        </Form.Group>
        {/* submit buttom */}
        <Button
          className="mt-3"
          variant="primary"
          type="submit"
          onClick={handleOnSubmit}
        >
          Register
        </Button>
      </Card>
    </div>
  );
};

export default AdminRegForm;
