"use strict";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

import reducers from "./reducers/flightReducers";

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

import FligthList from "./components/flightList";
import FligthForm from "./components/flightForm";

// render(
//   <Provider store={store}>
//     <FligthList />
//   </Provider>,
//   document.getElementById("app")
// );

render(
  <Provider store={store}>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Flight List</Link>
            </li>
            <li>
              <Link to="/add">Add Flight</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={FligthList} />
          <Route path="/add" component={FligthForm} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById("app")
);
