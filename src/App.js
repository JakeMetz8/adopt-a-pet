import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams.js";
import Details from "./Details.js";
import ThemeContext from "./ThemeContext.js";

const App = () => {
  const theme = useState("darkBlue");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={theme}>
        <div>
          <header>
            <Link to="/">Adopt me!</Link>
          </header>
          <Router>
            <Details path="/details/:id" />
            <SearchParams path="/" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
