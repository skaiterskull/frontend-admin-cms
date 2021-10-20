import React from "react";
import AdminLayout from "../layout/AdminLayout";
import { PaymentOptionTable } from "../../components/payment-option-list/PaymentOptionTable";
import { AddPaymentForm } from "../../components/add-payment-form/AddPaymentForm";

const Payment = () => {
  return (
    <AdminLayout>
      <div>Payment Page</div>
      <hr />
      <AddPaymentForm />
      <hr />
      <PaymentOptionTable />
    </AdminLayout>
  );
};

export default Payment;
