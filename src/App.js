import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement(
    "div",
    { id: "" },
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havaneese"
    }),
    React.createElement(Pet, {
      name: "Chimani",
      animal: "Sparrow",
      breed: "breed1"
    }),
    React.createElement(Pet, {
      name: "Konan Amba",
      animal: "Mango",
      breed: "Hapoos"
    })
  );
};

render(React.createElement(App), document.getElementById("root"));
