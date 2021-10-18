import React from "react";
import AdminLayout from "../layout/AdminLayout";
import { EditProductForm } from "../../components/edit-product-form/EditProductForm";

const EditProduct = () => {
  return (
    <AdminLayout>
      <h1>Edit Product</h1>
      <hr />
      <EditProductForm />
    </AdminLayout>
  );
};

export default EditProduct;
