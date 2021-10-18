import React, { useEffect, useState } from "react";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { updateUserProfileAction } from "../../pages/admin-user/userAction";
import { Spinner, Alert } from "react-bootstrap";
import { CustomModal } from "../../components/custom-modal/CustomModal";

export const EditAdminProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const { user, isPending, userResp } = useSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState(user);
  const dispatch = useDispatch();

  useEffect(() => {
    setUserInfo(user);
  }, [user]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { fname, lname, dob, phone, address, gender } = userInfo;
    const newUserInfo = {
      fname,
      lname,
      dob,
      phone,
      address,
      gender,
    };
    dispatch(updateUserProfileAction(newUserInfo));
    setShowModal(true);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      {isPending && <Spinner variant="primary" animation="border" />}
      {userResp?.status && (
        <CustomModal
          size="sm"
          title={userResp.status}
          show={showModal}
          onHide={() => setShowModal(false)}
        >
          <div>{userResp.message}</div>
        </CustomModal>
      )}

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
          <Form.Control
            type="date"
            name="dob"
            value={userInfo.dob ? userInfo.dob.substr(0, 10) : undefined}
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
              value="Male"
              checked={userInfo?.gender === "Male"}
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
              value="Female"
              checked={userInfo?.gender === "Female"}
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
        size="lg"
        onClick={handleOnSubmit}
      >
        Update Profile
      </Button>
    </Form>
  );
};
