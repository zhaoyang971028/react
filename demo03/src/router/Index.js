import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createHashHistory } from "history";

import LoginView from "../views/login/LoginView";
import RegisterView from "../views/register/RegisterView";
import App from "../views/view1/App";

const history = createHashHistory();

export default class Index extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router history={history}>
        <Route exact path="/" component={App} />
        <Route path="/LoginView" component={LoginView} />
        <Route path="/register" component={RegisterView} />
      </Router>
    );
  }
}
