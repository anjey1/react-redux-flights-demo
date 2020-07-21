"use strict";

import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Switch, Routes} from "react-router-dom";

import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger";

import reducers from "./reducers/flightReducers";

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

import FligthList from "./components/flightList";
import FligthForm from "./components/flightForm";

render (<Provider store={store}>
    <FligthList/>
</Provider>, document.getElementById("app"));


// render (<Router>
//     <Provider store={store}>
//         <Switch>
//             <Route path="/"
//                 component={FligthList}/>
//             <Route path="/add"
//                 component={FligthForm}/>
//         </Switch>
//     </Provider>
// </Router>, document.getElementById("app"));
