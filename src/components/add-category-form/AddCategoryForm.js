import React from "react";
import { Form, Row, Col, Button, FloatingLabel } from "react-bootstrap";

export const AddCategoryForm = () => {
  const categories = [
    { _id: 1, name: "Grocery", slug: "grocery", parentCat: "" },
    { _id: 2, name: "Milk", slug: "Milk", parentCat: "1" },
    { _id: 3, name: "Electronic", slug: "Electronic", parentCat: "" },
    { _id: 4, name: "Laptops", slug: "Laptops", parentCat: "3" },
    { _id: 5, name: "Mobile", slug: "Mobile", parentCat: "3" },
    { _id: 6, name: "Furniture", slug: "Furniture", parentCat: "" },
  ];

  //parent cat only
  const parentCatOnly = categories.filter((row) => !row.parentCat);

  //child cat only
  const childCat = categories.filter(() => {});
  const handleOnChange = (e) => {};

  return (
    <div>
      <Form>
        <Row>
          <Col md={5} className="mt-md-2">
            <FloatingLabel
              controlId="floatingSelectGrid"
              label="Enter Category Name"
            >
              <Form.Control
                name="name"
                placeholder="Enter Category Name"
                handleOnChange={handleOnChange}
              />
            </FloatingLabel>
          </Col>
          <Col md={5} className="mt-md-2">
            <FloatingLabel
              controlId="floatingSelectGrid"
              label="Select Category"
            >
              <Form.Select aria-label="Floating label select example">
                <option>Select Parent Category</option>

                {parentCatOnly.map((row, i) => (
                  <option key={row._id} value={row._id}>
                    {row.name}
                  </option>
                ))}
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col>
            <Button type="submit" variant="success">
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
