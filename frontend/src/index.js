import React from "react";
import ReactDOM from "react-dom/client";

import { QueryClient, QueryClientProvider } from "react-query";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "layouts/Admin.js";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </BrowserRouter>
  </QueryClientProvider>
);
