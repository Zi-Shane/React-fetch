import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./components/App";
import Main from "./views/Main"
import MovieList from "./components/MovieList";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <div>
    <Main />
    <MovieList />
  </div>,
  document.getElementById("root")
);
registerServiceWorker();
