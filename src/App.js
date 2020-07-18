import React from "react";
import "./App.css";
import CssBaseLine from "@material-ui/core/CssBaseline";
import { Route } from "react-router-dom";
import Home from "./components/index";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <CssBaseLine />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
    </>
  );
}

export default App;
