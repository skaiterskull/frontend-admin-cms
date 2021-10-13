import React from "react";
import { useSelector } from "react-redux";
import { OtpRequestForm } from "../../components/reset-password-form/OtpRequestFrom";
import { ResetPasswordForm } from "../../components/reset-password-form/ResetPasswordForm";

const ResetPassword = () => {
  const { showResetPassForm } = useSelector((state) => state.user);

  return (
    <div className="d-flex justify-content-center">
      {showResetPassForm ? <ResetPasswordForm /> : <OtpRequestForm />}
    </div>
  );
};

export default ResetPassword;
