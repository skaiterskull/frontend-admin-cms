import React from "react";
import { useState } from "react";
import { Form, Row, Col, Card, InputGroup } from "react-bootstrap";

const user = {
  fname: "",
  lname: "",
  dob: "",
  email: "",
  password: "",
  phone: "",
  address: "",
  gender: "",
};

const AdminRefForm = () => {
  const [newUser, setNewUser] = useState(user);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(newUser, "send to databsase");
  };
  console.log(newUser);
  return (
    <div>
      <h1 className="text-center">Admin User Registration</h1>
      <Card className="p-4 mt-3">
        {/* fname */}
        <Form.Group as={Row} className="mb-2 mt-2">
          <Form.Label>First Name</Form.Label>
          <Col>
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
          <Form.Label>Last Name</Form.Label>
          <Col>
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
          <Form.Label>DOB</Form.Label>
          <Col>
            <Form.Control type="date" name="dob" onChange={handleOnChange} />
          </Col>
        </Form.Group>
        {/* email */}
        <Form.Group as={Row} className="mb-2 mt-2">
          <Form.Label>Email</Form.Label>
          <Col>
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
          <Form.Label>Password</Form.Label>
          <Col>
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
          <Form.Label>Confirm Password</Form.Label>
          <Col>
            <Form.Control type="password" name="fname" placeholder="Password" />
          </Col>
        </Form.Group>
        {/* phone */}
        <Form.Group as={Row} className="mb-2 mt-2">
          <Form.Label>Phone</Form.Label>
          <Col>
            <Form.Control
              name="phone"
              placeholder="Phone Number"
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group>
        {/* address */}
        <Form.Group as={Row} className="mb-2 mt-2">
          <Form.Label>Address</Form.Label>
          <Col>
            <Form.Control
              name="address"
              placeholder="Address"
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group>
        {/* gender */}
        <Form.Group as={Row} className="mb-2 mt-2">
          <Form.Label>Gender</Form.Label>
          <Col>
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
          <Col>
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
      </Card>
    </div>
  );
};

export default AdminRefForm;
