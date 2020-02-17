import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

export default class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 1.357107,
      lng: 103.8194992,
      zoom: 12,
      text: "Hello World"
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div className="leaflet-container">
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
            maxZoom="18"
            id="mapbox/streets-v11"
            accessToken="pk.eyJ1IjoiZW1pamF5IiwiYSI6ImNrNmtqbXN6YzA0cHUzcnJyYWN4anRjMTEifQ.UIQ_UNwanG23WQJ5PvCYuw"
          />
          <Marker position={position}>
            <Popup>
              <div>{this.state.text}</div>
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}
