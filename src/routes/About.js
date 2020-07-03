import React from "react";

import "../style/About.css";

function About(props) {
  console.log("props", props);
  return (
    <div className="about-container">
      <span>
        "Freedom is the freedom to say that two plus make four. If that is
        granted, all else follows."
      </span>
      <span>- George Orwell, 1984</span>
    </div>
  );
}

export default About;