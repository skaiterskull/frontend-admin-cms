import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getPaymentOption } from "../../pages/payment/paymentOptionAction";
export const PaymentOptionTable = () => {
  const { paymentOptList } = useSelector((state) => state.payment);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPaymentOption());
  }, [dispatch]);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Name</th>
            <th>Info</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {paymentOptList?.length &&
            paymentOptList.map((row, i) => (
              <tr key={row._id}>
                <td>{i + 1}</td>
                <td>{row.status ? "Online" : "Offline"}</td>
                <td>{row.name}</td>
                <td>{row.info}</td>
                <td>
                  <Button>Delete</Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};
