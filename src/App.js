import React from "react";
import { render } from "react-dom";
import Quote from "./Quote";
const App = () => {
  return (
    <div className="container mx-auto">
      <Quote />
    </div>
  );
};

render(<App />, document.getElementById("root"));
