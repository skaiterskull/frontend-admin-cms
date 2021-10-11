import React, { useState, useEffect } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { requestOTPAction } from "../../pages/admin-user/userAction";
import { Alert, Spinner } from "react-bootstrap";

export const OtpRequestForm = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const { isPending, userResp } = useSelector((state) => state.user);

  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const pageLoading = () => {
    setIsLoading(false);
  };
  // useEffect(() => {
  //   !isLoggedIn && dispatch(autoLoginAction());
  //   isLoggedIn && history.replace(from);
  //   setTimeout(pageLoading, 3000);
  // }, [isLoggedIn, history, from, dispatch]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
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
