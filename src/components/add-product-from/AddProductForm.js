import React, { useState, useEffect } from "react";
import { Form, Button, Spinner, Row, Col, Badge } from "react-bootstrap";
import { FormGroup } from "../../components/form-group/FormGroup";
import { useDispatch, useSelector } from "react-redux";
import { addProductsAction } from "../../pages/product/productAction";
import { CustomModal } from "../../components/custom-modal/CustomModal";
import { ProductCategoryList } from "../../components/category-list/ProductCategoryList";
import { getCategories } from "../../pages/category/CategoryAction";

const initialState = {
  title: "",
  status: false,
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
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState(initialState);
  const dispatch = useDispatch();
  const { isPending, productRes } = useSelector((state) => state.product);
  const { categories } = useSelector((state) => state.category);
  const [prodCategory, setprodCategory] = useState([]);

  useEffect(() => {
    if (!categories.length) {
      dispatch(getCategories());
    }
  }, [dispatch]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(addProductsAction({ ...product, categories: prodCategory }));
    e.target.reset();
    if (!isPending) {
      setShowModal(true);
    }
    console.log(product);
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

  const handleOnCatSelect = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setprodCategory([...prodCategory, value]);
    } else {
      const arg = prodCategory.filter((row) => row !== value);
      setprodCategory(arg);
    }
  };

  return (
    <div>
      {isPending && <Spinner animation="border"></Spinner>}
      {productRes?.status && (
        <CustomModal
          size="sm"
          title={productRes.status}
          show={showModal}
          onHide={() => setShowModal(false)}
        >
          <div>{productRes.message}</div>
        </CustomModal>
      )}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Col sm="2">
            <Form.Check
              checked={product?.status}
              type="switch"
              name="status"
              id="custom-switch"
              label="Status"
              onChange={handleOnChange}
            />
          </Col>

          {product?.status ? (
            <Form.Label column sm="10" className="pt-0">
              <Badge bg="success">Online</Badge>
            </Form.Label>
          ) : (
            <Form.Label column sm="10" className="pt-0">
              <Badge bg="danger">Offline</Badge>
            </Form.Label>
          )}
        </Form.Group>

        {inputFields.map((row, i) => (
          <FormGroup {...row} onChange={handleOnChange} />
        ))}

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Categories
          </Form.Label>
          <Col sm="10">
            <ProductCategoryList
              handleOnCatSelect={handleOnCatSelect}
              prodCategory={prodCategory}
            />
          </Col>
        </Form.Group>

        <Button type="submit" variant="success">
          Add new product
        </Button>
      </Form>
    </div>
  );
};
