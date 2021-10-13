import React from "react";
import AdminLayout from "../layout/AdminLayout";
import { AddProductForm } from "../../components/add-product-from/AddProductForm";

const AddProduct = () => {
  return (
    <AdminLayout>
      <h1>Add New Product</h1>
      <hr />
      <AddProductForm />
    </AdminLayout>
  );
};

export default AddProduct;
