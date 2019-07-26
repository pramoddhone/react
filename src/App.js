import React from "react";
import { render } from "react-dom";
import SearchParam from "./SearchParam";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <SearchParam></SearchParam>
    </div>
  );
};

render(<App></App>, document.getElementById("root"));
