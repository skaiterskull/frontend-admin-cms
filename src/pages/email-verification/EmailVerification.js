import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { verifyUserEmail } from "../admin-user/userAction";
import { Spinner, Alert, Card } from "react-bootstrap";

const EmailVerification = () => {
  const { isPending, emailVerificationResp } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const queries = new URLSearchParams(useLocation().search);
  const otp = queries.get("otp");
  const email = queries.get("email");

  useEffect(() => {
    dispatch(verifyUserEmail({ otp, email }));
  }, [dispatch, otp, email]);

  return (
    <div className="d-flex justify-content-center mt-5">
      <Card style={{ width: "500px", padding: "2rem" }}>
        <h2>Email Validation</h2>
        {isPending && <Spinner variant="primary" animation="border" />}
        {emailVerificationResp.status && (
          <Alert
            variant={
              emailVerificationResp.status === "Success" ? "success" : "danger"
            }
          >
            {emailVerificationResp.message}
          </Alert>
        )}
      </Card>
    </div>
  );
};

export default EmailVerification;
