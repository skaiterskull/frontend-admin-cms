import React from "react";
import { Link } from "react-router-dom";
import "./sidebar-menu.style.css";

export const SideBarMenu = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top text-center">
        <i class="fas fa-user"></i>
      </div>
      <hr />
      <div className="sidebar-main"></div>
      <ul>
        <li>
          <Link className="menu-item" to="/dashboard">
            <i class="fas fa-tachometer-alt"></i> Dashboard
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/categories">
            <i class="fas fa-sitemap"></i> Categories
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/products">
            <i class="fas fa-box-open"></i> Products
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/orders">
            <i class="fas fa-sort-amount-up-alt"></i> Orders
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/customers">
            <i class="fas fa-users"></i> Customers
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/payments">
            <i class="far fa-credit-card"></i> Payments
          </Link>
        </li>
      </ul>

      <hr />

      <ul>
        <li>
          <Link className="menu-item" to="/registration">
            <i class="fas fa-users"></i> Admin Users
          </Link>
        </li>
      </ul>
    </div>
  );
};
