const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "Dale",
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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
