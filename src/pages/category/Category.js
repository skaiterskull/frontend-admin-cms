import React from "react";
import AdminLayout from "../layout/AdminLayout";
import { AddCategoryForm } from "../../components/add-category-form/AddCategoryForm";
import { ListGroup, Button } from "react-bootstrap";

const Category = () => {
  return (
    <AdminLayout>
      <h1>Category</h1>
      <div className="add-cat-forn">
        <AddCategoryForm />
      </div>
      <hr />
      <div className="cat-list">
        <ListGroup>
          <ListGroup.Item className="d-flex justify-content-between">
            <span>Category name</span>
            <span>
              <Button variant="primary">Edit</Button>
              <Button variant="danger" style={{ marginLeft: "1rem" }}>
                Delete
              </Button>
            </span>
          </ListGroup.Item>
        </ListGroup>
        <ListGroup>
          <ListGroup.Item className="d-flex justify-content-between">
            <span>Category name</span>
            <span>
              <Button variant="primary">Edit</Button>
              <Button variant="danger" style={{ marginLeft: "1rem" }}>
                Delete
              </Button>
            </span>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </AdminLayout>
  );
};

export default Category;
