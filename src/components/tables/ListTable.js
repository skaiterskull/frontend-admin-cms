import React, { useEffect, useState } from "react";
import { Table, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  getProductsAction,
  deleteProductsAction,
} from "../../pages/product/productAction";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { CustomModal } from "../custom-modal/CustomModal";

export const ListTable = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const { productList, isPending, productRes } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this peoduct?")) {
      dispatch(deleteProductsAction(_id));
      if (!isPending) {
        setShowModal(true);
      }
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
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Thumbnail</th>
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
                <td>
                  {row.images?.length && (
                    <img
                      src={row.images[0]}
                      alt="product thumbnail"
                      style={{ width: "80px" }}
                    />
                  )}
                </td>
                <td>{row.status === true ? "Online" : "Offline"}</td>
                <td>{row.title}</td>
                <td>{row.price}</td>
                <td>{row.qty}</td>
                <td>{row.brand}</td>
                <td>
                  <Link to={`/products/${row.slug}`}>
                    <Button variant="primary">Edit</Button>
                  </Link>
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
