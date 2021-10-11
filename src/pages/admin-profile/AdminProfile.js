import React from "react";
import { useEffect } from "react";
import AdminLayout from "../layout/AdminLayout";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile } from "../admin-user/userAction.js";
import { EditAdminProfile } from "../../components/edit-admin-profile/EditAdminProfile";
import { UpdatePassword } from "../../components/update-password/UpdatePassword";

export const AdminProfile = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    !user?._id && dispatch(getUserProfile());
  }, []);

  return (
    <AdminLayout>
      <h1 className="text-center">Welcome {user?.fname}</h1>
      <hr />
      <h2>Update Profile</h2>
      <div className="edit-profile-form">
        <EditAdminProfile />
      </div>
      <hr />
      <h2>Update Password</h2>
      <div className="edit-password-form">
        <UpdatePassword />
      </div>

      <hr />
    </AdminLayout>
  );
};

export default AdminProfile;
