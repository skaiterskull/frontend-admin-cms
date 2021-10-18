import React, { useState, useEffect } from "react";
import { Form, Button, Spinner, Col, Row, Badge } from "react-bootstrap";
import { FormGroup } from "../form-group/FormGroup";
import { useDispatch, useSelector } from "react-redux";
import {
  updateProductsAction,
  getSingleProductAction,
} from "../../pages/product/productAction";
import { useParams } from "react-router-dom";
import { ProductCategoryList } from "../../components/category-list/ProductCategoryList";
import { CustomModal } from "../custom-modal/CustomModal";
import { getCategories } from "../../pages/category/CategoryAction";

const initialState = {
  title: "",
  status: true,
  categories: "",
  price: 0,
  qty: 0,
  description: "",
  salePrice: 0,
  saleStartDate: "",
  saleEndDate: "",
  brand: "",
};

export const EditProductForm = () => {
  const { slug } = useParams();
  const [updateProduct, setUpdateProduct] = useState(initialState);
  const [showModal, setShowModal] = useState(false);
  const [prodCategory, setprodCategory] = useState([]);
  const dispatch = useDispatch();
  const { isPending, productRes, selectedProduct } = useSelector(
    (state) => state.product
  );
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    if (!categories?.length) {
      dispatch(getCategories());
    }
    if (!selectedProduct?._id || slug !== selectedProduct?.slug) {
      dispatch(getSingleProductAction(slug));
    }

    setUpdateProduct(selectedProduct);
    selectedProduct?.categories && setprodCategory(selectedProduct.categories);
  }, [slug, dispatch, selectedProduct]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { __v, slug, ...toUpdate } = updateProduct;
    toUpdate.categories = prodCategory;
    dispatch(updateProductsAction(slug, toUpdate));
    setShowModal(true);
    e.target.reset();
    window.scrollTo(0, 0);
  };

  const handleOnChange = (e) => {
    const { checked, name, value } = e.target;
    if (name === "status") {
      return setUpdateProduct({
        ...updateProduct,
        status: checked,
      });
    }
    setUpdateProduct({
      ...updateProduct,
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

  const inputFields = [
    {
      label: "Title",
      name: "title",
      placeholder: "Samsung TV",
      required: true,
      value: updateProduct?.title,
    },
    {
      label: "Price",
      name: "price",
      type: "number",
      placeholder: "$",
      required: true,
      value: updateProduct?.price,
    },
    {
      label: "Qty",
      name: "qty",
      type: "number",
      placeholder: "100",
      required: true,
      value: updateProduct?.qty,
    },
    {
      label: "Description",
      name: "description",
      as: "textarea",
      rows: 5,
      placeholder: "Product Description",
      required: true,
      value: updateProduct?.description,
    },
    {
      label: "Sale Price",
      name: "salePrice",
      type: "number",
      placeholder: "100",
      value: updateProduct?.salePrice,
    },
    {
      label: "Sale Start Date",
      name: "saleStartDate",
      type: "date",
      value: updateProduct?.saleStartDate
        ? updateProduct.saleStartDate.substr(0, 10)
        : null,
    },
    {
      label: "Sale End Date",
      name: "saleEndDate",
      type: "date",
      value: updateProduct?.saleEndDate
        ? updateProduct.saleEndDate.substr(0, 10)
        : null,
    },
    {
      label: "Brand",
      name: "brand",
      placeholder: "Samsung TV",
      required: true,
      value: updateProduct?.brand,
    },
  ];
  return (
    <div>
      {isPending && <Spinner animation="border"></Spinner>}
      {productRes?.status && (
        <CustomModal
          size="sm"
          title={productRes?.status}
          show={showModal}
          onHide={() => setShowModal(false)}
        >
          <div>{productRes?.message}</div>
        </CustomModal>
      )}

      <Form onSubmit={handleOnSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Col sm="2">
            <Form.Check
              bg="danger"
              type="switch"
              name="status"
              id="custom-switch"
              label="Status"
              checked={updateProduct?.status}
              onChange={handleOnChange}
            />
          </Col>
          {updateProduct?.status ? (
            <Form.Label column sm="10" className="pt-0">
              <Badge bg="success">Online</Badge>
            </Form.Label>
          ) : (
            <Form.Label column sm="10" className="pt-0">
              <Badge bg="danger">Offline</Badge>
            </Form.Label>
          )}
        </Form.Group>
        {inputFields?.map((row, i) => (
          <FormGroup {...row} onChange={handleOnChange} key={i} />
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

        <Button type="submit" variant="primary">
          Update Product
        </Button>
      </Form>
    </div>
  );
};
