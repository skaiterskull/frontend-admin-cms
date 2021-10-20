import React, { useState } from "react";
import { Form, Row, Col, Button, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addNewCat } from "../../pages/category/CategoryAction";
import { CustomModal } from "../custom-modal/CustomModal";

const initialState = {
  status: false,
  name: "",
  info: "",
};

export const AddPaymentForm = () => {
  const [payment, setPayment] = useState(initialState);
  const [showModal, setShowModal] = useState(false);
  const { isPending, paymentOptRes } = useSelector((state) => state.payment);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { checked, name, value } = e.target;
    setPayment({
      ...payment,
      [name]: name === "status" ? checked : value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // dispatch(addNewCat(newCat));
    // e.target.reset();
    if (!isPending) {
      setShowModal(true);
    }
    console.log(payment);
  };

  return (
    <div>
      {isPending && <Spinner variant="primary" animation="border"></Spinner>}
      {paymentOptRes?.status && (
        <CustomModal
          size="sm"
          title={paymentOptRes.status}
          show={showModal}
          onHide={() => setShowModal(false)}
        >
          <div>{paymentOptRes.message}</div>
        </CustomModal>
      )}
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col md={2} className="mt-2">
            <Form.Check
              name="status"
              onChange={handleOnChange}
              label="Status"
            />
          </Col>
          <Col md={3} className="mt-2">
            <Form.Control
              name="name"
              onChange={handleOnChange}
              placeholder="payment name"
              aria-label="payment name"
              required
            />
          </Col>
          <Col md={5} className="mt-2">
            <Form.Control
              name="info"
              placeholder="Description"
              onChange={handleOnChange}
              aria-label="Description"
              required
            />
          </Col>
          <Col className="mt-2">
            <Button type="submit" size="lg">
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
