import React from "react";
import { render } from "react-dom";
import { Map, TileLayer } from "react-leaflet";

const App = () => {
  return (
    <div>
      <div>
        <h1>React Leaftlet</h1>
      </div>
      <div className="leaflet-container">
        <Map center={[1.34, 103.83]} zoom={12}>
          <TileLayer
            url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
            maxZoom="18"
            id="mapbox/streets-v11"
            accessToken="pk.eyJ1IjoiZW1pamF5IiwiYSI6ImNrNmtqbXN6YzA0cHUzcnJyYWN4anRjMTEifQ.UIQ_UNwanG23WQJ5PvCYuw"
          />
        </Map>
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
