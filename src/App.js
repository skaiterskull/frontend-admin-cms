import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../src/pages/login/Login";
import Registration from "../src/pages/admin-registration/Registration";
import PageNotFound from "./components/page-not-found/PageNotFound";
import EmailVerification from "./pages/email-verification/EmailVerification";
import Dashboard from "./pages/dashboard/Dashboard";
import Category from "./pages/category/Category";
import Product from "./pages/product/Product";
import Order from "./pages/order/Order";
import Customer from "./pages/customer/Customer";
import Payment from "./pages/payment/Payment";
import PrivateRoute from "./components/private-route/PrivateRoute";
import AdminProfile from "./pages/admin-profile/AdminProfile";
import ResetPassword from "./pages/reset-password/ResetPassword";
import AddProduct from "./pages/product/AddProduct";
import EditProduct from "./pages/product/EditProduct";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <PrivateRoute path="/registration">
            <Registration />
          </PrivateRoute>

          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>

          <PrivateRoute path="/categories">
            <Category />
          </PrivateRoute>

          <PrivateRoute exact path="/products">
            <Product />
          </PrivateRoute>

          <PrivateRoute path="/products/new">
            <AddProduct />
          </PrivateRoute>

          <PrivateRoute path="/products/:slug">
            <EditProduct />
          </PrivateRoute>

          <PrivateRoute path="/admin-profile">
            <AdminProfile />
          </PrivateRoute>

          <PrivateRoute path="/orders">
            <Order />
          </PrivateRoute>

          <PrivateRoute path="/customers">
            <Customer />
          </PrivateRoute>

          <PrivateRoute path="/payments">
            <Payment />
          </PrivateRoute>

          <Route path="/reset-password">
            <ResetPassword />
          </Route>

          <Route path="/email-verification">
            <EmailVerification />
          </Route>

          <Route exact path="/">
            <Login />
          </Route>

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
