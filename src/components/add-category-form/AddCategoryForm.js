import React, { useState } from "react";
import { Form, Row, Col, Button, FloatingLabel } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addNewCat } from "../../pages/category/CategoryAction";
import { Spinner, Alert } from "react-bootstrap";

const initialState = {
  name: "",
  parentCat: "",
};

export const AddCategoryForm = () => {
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [newCat, setNewCat] = useState(initialState);

  //parent cat only
  const parentCatOnly = categories.filter((row) => !row.parentCat);

  //child cat only
  // const childCat = categories.filter((row) => row.parentCat);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewCat({ ...newCat, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewCat(newCat));
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col md={5} className="mt-md-2">
            <FloatingLabel
              controlId="floatingSelectGrid"
              label="Enter Category Name"
            >
              <Form.Control
                name="name"
                placeholder="Enter Category Name"
                onChange={handleOnChange}
              />
            </FloatingLabel>
          </Col>
          <Col md={5} className="mt-md-2">
            <FloatingLabel
              controlId="floatingSelectGrid"
              label="Select Category"
            >
              <Form.Select
                aria-label="Floating label select example"
                name="parentCat"
                onChange={handleOnChange}
              >
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
