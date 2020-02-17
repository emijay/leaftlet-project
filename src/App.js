import React from "react";
import { render } from "react-dom";
import MapComponent from "./components/Map";

const App = props => {
  return (
    <div>
      <div>
        <h1>React Leaftlet Project</h1>
      </div>
      <MapComponent />
    </div>
  );
};

render(<App />, document.getElementById("root"));
