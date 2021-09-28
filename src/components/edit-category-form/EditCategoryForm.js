import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button, FloatingLabel } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { CustomModal } from "../custom-modal/CustomModal";
import { onDeSelectCategory } from "../../pages/category/CategorySlice";
import { categoryUpdate } from "../../pages/category/CategoryAction";

export const EditCategoryForm = () => {
  const { categories, selectedCat } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [updateCat, setUpdateCat] = useState({});

  useEffect(() => {
    setUpdateCat(selectedCat);
  }, [selectedCat]);

  //parent cat only
  const parentCatOnly = categories.filter((row) => !row.parentCat);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUpdateCat({ ...updateCat, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { _id, name, parentCat } = updateCat;
    if (name !== selectedCat.name || parentCat !== selectedCat.parentCat) {
      dispatch(categoryUpdate({ _id, name, parentCat }));
      dispatch(onDeSelectCategory());
      return;
    }

    alert("There was no change, nothing will be updated!");
  };

  return (
    <CustomModal
      show={selectedCat._id}
      onHide={() => dispatch(onDeSelectCategory())}
      title="Edit Category"
    >
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
                  value={updateCat.name}
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
                  <option value="">Select Parent Category</option>
                  {parentCatOnly.map((row, i) => (
                    <option
                      key={row._id}
                      value={row._id}
                      selected={row._id === updateCat.parentCat}
                    >
                      {row.name}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col>
              <Button type="submit" variant="success" className="mt-md-2 p-3">
                Update
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </CustomModal>
  );
};
