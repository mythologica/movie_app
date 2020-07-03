import React from "react";
import { Link } from "react-router-dom";

import "../style/Navigation.css";

export default function Navigation(props) {
  console.log("props", props);
  return (
    <div className="nav">
      {/* 
      <Link to="/">Home</Link><br />
      <Link to="/about">About</Link> <br/>
    */}
      <Link to={{ pathname: "/", state: { fromNavigation: true } }}>Home</Link>
      <br />
      <Link to={{ pathname: "/about", state: { fromNavigation: false } }}>
        About
      </Link>
      <br />
    </div>
  );
}
