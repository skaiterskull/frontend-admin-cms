import React from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adminLogin } from "../../pages/admin-user/userAction";

export const LoginForm = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const from = location?.state?.from?.pathname || "/dashboard";

  const handleOnChange = (e) => {};
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(adminLogin());
    history.replace(from);
  };
  return (
    <div>
      <Card className="p-5 mt-4">
        <h1>Admin User Login</h1>
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

          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="4">
              Password *
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
                minLength="6"
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
      </Card>
    </div>
  );
};
