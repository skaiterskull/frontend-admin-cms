import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Spinner, Alert } from "react-bootstrap";

export const CategoryList = () => {
  const { isPending, categories, categoryRes } = useSelector(
    (state) => state.category
  );

  return (
    <div>
      {isPending && <Spinner variant="primary" animation="border" />}
      {categoryRes.status && (
        <Alert
          variant={categoryRes.status === "Success" ? "success" : "danger"}
        >
          {categoryRes.message}
        </Alert>
      )}
      <ListGroup>
        {categories?.length &&
          categories.map((row) => {
            return (
              <ListGroup.Item
                key={row._id}
                className="d-flex justify-content-between"
              >
                <span>{row.name}</span>
                <span>
                  <Button variant="primary">Edit</Button>
                  <Button variant="danger" style={{ marginLeft: "1rem" }}>
                    Delete
                  </Button>
                </span>
              </ListGroup.Item>
            );
          })}
      </ListGroup>
      <ListGroup>
        <ListGroup.Item className="d-flex justify-content-between">
          <span> =&gt; Category name</span>
          <span>
            <Button variant="primary">Edit</Button>
            <Button variant="danger" style={{ marginLeft: "1rem" }}>
              Delete
            </Button>
          </span>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};
