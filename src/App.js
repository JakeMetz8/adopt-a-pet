import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "Good boy",
      animal: "Dog",
      breed: "Retriever",
    }),
    React.createElement(Pet, {
      name: "Rocket",
      animal: "Bird",
      breed: "Parakeet",
    }),
    React.createElement(Pet, {
      name: "Fluff",
      animal: "Cat",
      breed: "Mixed",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
