import React, { Fragment, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Home from "./containers/Home";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path='/' render={() => <Home />} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
