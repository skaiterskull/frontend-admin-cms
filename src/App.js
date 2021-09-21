import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "../src/pages/login/Login";
import Registration from "../src/pages/admin-registration/Registration";
import PageNotFound from "./components/page-not-found/PageNotFound";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/registration">
            <Registration />
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
