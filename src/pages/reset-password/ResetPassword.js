import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { OtpRequestForm } from "../../components/reset-password-form/OtpRequestFrom";
import { ResetPasswordForm } from "../../components/reset-password-form/ResetPasswordForm";

const ResetPassword = () => {
  const { showResetForm } = useSelector((state) => state.user);

  return (
    <div className="d-flex justify-content-center">
      {showResetForm ? <ResetPasswordForm /> : <OtpRequestForm />}
    </div>
  );
};

export default ResetPassword;
