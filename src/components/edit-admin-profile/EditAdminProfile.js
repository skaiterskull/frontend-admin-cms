import React, { useEffect, useState } from "react";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

export const EditAdminProfile = () => {
  const { user } = useSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState(user);

  useEffect(() => {
    setUserInfo(user);
  }, [user]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Group as={Row} className="mb-2 mt-2">
        <Col sm="4" className="d-flex align-items-center justify-content-start">
          <Form.Label>First Name *</Form.Label>
        </Col>
        <Col sm="8">
          <Form.Control
            type="text"
            name="fname"
            value={userInfo.fname}
            placeholder="First name"
            required
            onChange={handleOnChange}
          />
        </Col>
      </Form.Group>
      {/* lname */}
      <Form.Group as={Row} className="mb-2 mt-2">
        <Col sm="4" className="d-flex align-items-center justify-content-start">
          <Form.Label>Last Name *</Form.Label>
        </Col>
        <Col sm="8">
          <Form.Control
            type="text"
            name="lname"
            value={userInfo.lname}
            placeholder="Last Name"
            required
            onChange={handleOnChange}
          />
        </Col>
      </Form.Group>
      {/* DOB */}
      <Form.Group as={Row} className="mb-2 mt-2">
        <Col sm="4" className="d-flex align-items-center justify-content-start">
          <Form.Label>DOB</Form.Label>
        </Col>
        <Col sm="8">
          <Form.Control type="date" name="dob" onChange={handleOnChange} />
        </Col>
      </Form.Group>
      {/* email */}
      <Form.Group as={Row} className="mb-2 mt-2">
        <Col sm="4" className="d-flex align-items-center justify-content-start">
          <Form.Label>Email *</Form.Label>
        </Col>
        <Col sm="8">
          <Form.Control
            type="email"
            name="email"
            value={userInfo.email}
            placeholder="Email"
            onChange={handleOnChange}
          />
        </Col>
      </Form.Group>
      {/* phone */}
      <Form.Group as={Row} className="mb-2 mt-2">
        <Col sm="4" className="d-flex align-items-center justify-content-start">
          <Form.Label>Phone</Form.Label>
        </Col>
        <Col sm="8">
          <Form.Control
            type="text"
            name="phone"
            value={userInfo.phone}
            placeholder="Phone Number"
            onChange={handleOnChange}
          />
        </Col>
      </Form.Group>
      {/* address */}
      <Form.Group as={Row} className="mb-2 mt-2">
        <Col sm="4" className="d-flex align-items-center justify-content-start">
          <Form.Label>Address</Form.Label>
        </Col>
        <Col sm="8">
          <Form.Control
            type="text"
            name="address"
            value={userInfo.address}
            placeholder="Address"
            onChange={handleOnChange}
          />
        </Col>
      </Form.Group>
      {/* gender */}
      <Form.Group as={Row} className="mb-2 mt-2">
        <Col xs="4" className="d-flex align-items-center justify-content-start">
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
        Update Profile
      </Button>
    </Form>
  );
};
