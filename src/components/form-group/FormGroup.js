import React from "react";
import { Form, Col, Row } from "react-bootstrap";

export const FormGroup = ({ label, ...rest }) => {
  return (
    <Form.Group as={Row} className="mb-3">
      <Form.Label column sm="2">
        {label}
      </Form.Label>
      <Col sm="10">
        <Form.Control {...rest} />
      </Col>
    </Form.Group>
  );
};
