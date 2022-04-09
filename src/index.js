// import 'bootstrap/dist/css/bootstrap.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import './Assets/Main.css'
import './Assets/Main.scss'
// import 'bulma/css/bulma.css';

// import "todomvc-app-css/index.css";
import RootRoutes from "./Routes/Routes";


ReactDOM.render(
  <React.StrictMode>
    <RootRoutes />
  </React.StrictMode>,
  document.getElementById("root")
);
