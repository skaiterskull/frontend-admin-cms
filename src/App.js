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
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/registration">
            <Registration />
          </Route>

          <Route path="/email-verification">
            <EmailVerification />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/categories">
            <Category />
          </Route>

          <Route path="/products">
            <Product />
          </Route>

          <Route path="/orders">
            <Order />
          </Route>

          <Route path="/customers">
            <Customer />
          </Route>

          <Route path="/payments">
            <Payment />
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
