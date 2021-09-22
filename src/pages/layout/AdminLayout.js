import React from "react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { SideBarMenu } from "../../components/sidebar-menu/SideBarMenu";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <div className="left">
        <SideBarMenu />
      </div>
      <div className="right">
        <Header />
        <div className="main">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
