import React, { useEffect } from "react";
import { Table, Spinner, Alert } from "react-bootstrap";
import {
  getProductsAction,
  deleteProductsAction,
} from "../../pages/product/productAction";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";

export const ListTable = () => {
  const dispatch = useDispatch();
  const { productList, isPending, productRes } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this peoduct?")) {
      dispatch(deleteProductsAction(_id));
    }
  };

  return (
    <div>
      {isPending && <Spinner animation="border"></Spinner>}
      {productRes?.message && (
        <Alert variant={productRes.status === "Success" ? "success" : "danger"}>
          {productRes.message}
        </Alert>
      )}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Title</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Brand</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {productList.length ? (
            productList.map((row, i) => (
              <tr key={row._id}>
                <td type="text">{i + 1}</td>
                <td>{row.status === true ? "Online" : "Offline"}</td>
                <td>{row.title}</td>
                <td>{row.price}</td>
                <td>{row.qty}</td>
                <td>{row.brand}</td>
                <td>
                  <Button variant="primary">Edit</Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleOnDelete(row._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <div>No data</div>
          )}
        </tbody>
      </Table>
    </div>
  );
};
