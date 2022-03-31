import React from "react";
import "antd/dist/antd.css";
import "../src/assets/css/styles.css"
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { configureStore } from "./redux/store";
import { Provider } from "react-redux";


import Page404 from "./pages/404/404.js";
import LandingPageLayout from "./pages/landingPage/LandingPageLayout.js";
import LoginRegisterLayout from "./pages/login/LoginRegisterLayout.js";
import ScrollToTop from "./routes/ScrollToTop";




const routes = (
  <Provider store={configureStore()}>
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={LandingPageLayout} />
          <Route exact path="/login" component={LoginRegisterLayout} />
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>

      </ScrollToTop>
    </BrowserRouter>
  </Provider>

);
ReactDOM.render(routes, document.querySelector("#root"));
