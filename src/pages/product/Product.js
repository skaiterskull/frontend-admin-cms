import React from "react";
import AdminLayout from "../layout/AdminLayout";
import { Button } from "react-bootstrap";
import { ListTable } from "../../components/tables/ListTable";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <AdminLayout>
      <h1>Products Page</h1>
      <hr />
      <div className="text-end">
        <Link to="/products/new">
          <Button variant="primary" className="text-end">
            <i class="fas fa-plus"></i> Add new product
          </Button>
        </Link>
      </div>

      <hr />
      <div className="product-list">
        <ListTable />
      </div>
    </AdminLayout>
  );
};

export default Product;
