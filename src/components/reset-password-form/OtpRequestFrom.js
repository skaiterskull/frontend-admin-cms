import React, { useState } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { requestOTPAction } from "../../pages/admin-user/userAction";

export const OtpRequestForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    email && dispatch(requestOTPAction(email));
  };

  return (
    <div>
      <Card className="p-5 mt-4">
        <h1>Request OTP</h1>
        <hr />
        <Form onSubmit={handleOnSubmit}>
          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              Email *
            </Form.Label>
            <Col sm="9">
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
              Request OTP
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
