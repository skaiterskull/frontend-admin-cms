import React from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router";

export const LoginForm = () => {
  const history = useHistory();
  const handleOnChange = (e) => {};
  const handleOnSubmit = (e) => {
    e.preventDefault();
    history.push("/dashboard");
  };
  return (
    <div>
      <Card className="p-5 mt-4">
        <h1>Admin User Login</h1>

        {/* {isPending && <Spinner variant="primary" animation="border" />}
				{userResp?.message && (
					<Alert variant={userResp.status === "success" ? "success" : "danger"}>
						{userResp.message}
					</Alert>
				)} */}
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
