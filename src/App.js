import React from "react";
import { HashRouter, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import About from "./routes/About";

import "./style/App.css";
import Detail from "./routes/Detail";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" component={Home} exact={true}/>
      <Route path="/about" component={About} />
      <Route path="/movie_detail" component={Detail} />
    </HashRouter>
  );
}

export default App;
