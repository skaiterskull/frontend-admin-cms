import React, { useState } from "react";
import { Form, Button, Spinner, Alert } from "react-bootstrap";
import { FormGroup } from "../../components/form-group/FormGroup";
import { useDispatch, useSelector } from "react-redux";
import { addProductsAction } from "../../pages/product/productAction";

const initialState = {
  title: "",
  status: true,
  categories: "aaa",
  price: 0,
  qty: 0,
  description: "",
  salePrice: 0,
  saleStartDate: "",
  saleEndDate: "",
  brand: "",
};

const inputFields = [
  { label: "Title", name: "title", placeholder: "Samsung TV", required: true },
  {
    label: "Price",
    name: "price",
    type: "number",
    placeholder: "$",
    required: true,
  },
  {
    label: "Qty",
    name: "qty",
    type: "number",
    placeholder: "100",
    required: true,
  },
  {
    label: "Description",
    name: "description",
    as: "textarea",
    rows: 5,
    placeholder: "Product Description",
    required: true,
  },
  {
    label: "Sale Price",
    name: "salePrice",
    type: "number",
    placeholder: "100",
  },
  { label: "Sale Start Date", name: "saleStartDate", type: "date" },
  { label: "Sale End Date", name: "saleEndDate", type: "date" },
  { label: "Brand", name: "brand", placeholder: "Samsung TV", required: true },
];

export const AddProductForm = () => {
  const [product, setProduct] = useState(initialState);
  const dispatch = useDispatch();
  const { isPending, productRes } = useSelector((state) => state.product);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(addProductsAction(product));
    e.target.reset();
  };

  const handleOnChange = (e) => {
    const { checked, name, value } = e.target;
    if (name === "status") {
      return setProduct({
        ...product,
        status: checked,
      });
    }
    setProduct({
      ...product,
      [name]: value,
    });
  };

  return (
    <div>
      {isPending && <Spinner animation="border"></Spinner>}
      {productRes?.message && (
        <Alert variant={productRes.status === "Success" ? "success" : "danger"}>
          {productRes.message}
        </Alert>
      )}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group>
          <Form.Check
            type="switch"
            name="status"
            id="custom-switch"
            label="Status"
            onChange={handleOnChange}
          />
        </Form.Group>
        {inputFields.map((row, i) => (
          <FormGroup {...row} onChange={handleOnChange} />
        ))}
        <Button type="submit" variant="success">
          Add new product
        </Button>
      </Form>
    </div>
  );
};
