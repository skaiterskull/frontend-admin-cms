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

          <PrivateRoute path="/products">
            <Product />
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
