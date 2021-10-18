import React from "react";
import { ListGroup, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

export const ProductCategoryList = ({ handleOnCatSelect, prodCategory }) => {
  const { categories } = useSelector((state) => state.category);

  return (
    <div
      className="product-category-list"
      style={{ height: "200px", overflowY: "scroll" }}
    >
      <ListGroup>
        {categories?.map((row) => (
          <ListGroup.Item key={row._id}>
            <Form.Check
              name="category"
              label={row.name}
              checked={prodCategory.includes(row._id)}
              defaultValue={row._id}
              onChange={handleOnCatSelect}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
