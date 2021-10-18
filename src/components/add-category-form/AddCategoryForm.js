import React, { useState } from "react";
import { Form, Row, Col, Button, FloatingLabel } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addNewCat } from "../../pages/category/CategoryAction";
import { CustomModal } from "../../components/custom-modal/CustomModal";

const initialState = {
  name: "",
  parentCat: "",
};

export const AddCategoryForm = () => {
  const { categories, categoryRes, isPending } = useSelector(
    (state) => state.category
  );
  const dispatch = useDispatch();
  const [newCat, setNewCat] = useState(initialState);
  const [showModal, setShowModal] = useState(false);

  //parent cat only
  const parentCatOnly = categories?.filter((row) => !row.parentCat);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewCat({ ...newCat, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewCat(newCat));
    e.target.reset();
    if (!isPending) {
      setShowModal(true);
    }
  };

  return (
    <div>
      {categoryRes?.status && (
        <CustomModal
          size="sm"
          title={categoryRes.status}
          show={showModal}
          onHide={() => setShowModal(false)}
        >
          <div>{categoryRes.message}</div>
        </CustomModal>
      )}
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
                <option value="">Select Parent Category</option>
                {parentCatOnly?.map((row, i) => (
                  <option key={row._id} value={row._id}>
                    {row.name}
                  </option>
                ))}
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col>
            <Button type="submit" variant="success" className="mt-md-2 p-3">
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
