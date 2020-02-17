import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer, Polyline } from "react-leaflet";

export default class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 1.357107,
      lng: 103.8194992,
      zoom: 12,
      text: "Hello World",
      currentPos: null,
      data: [
        {
          from_lat: 1.308684968569312,
          from_long: 103.84879231452943,
          id: "LTA HSO",
          to_lat: 1.2938782089810292,
          to_long: 103.85331451892854
        }
      ]
      //   markers: [
      //     { key: "marker1", position: [51.5, -0.1], content: "My first popup" },
      //     { key: "marker2", position: [51.51, -0.1], content: "My second popup" },
      //     { key: "marker3", position: [51.49, -0.05], content: "My third popup" }
      //   ]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ currentPos: e.latlng });
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div className="leaflet-container">
        <Map
          center={position}
          zoom={this.state.zoom}
          onClick={this.handleClick}
        >
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
          {this.state.currentPos && (
            <Marker position={this.state.currentPos}>
              <Popup position={this.state.currentPos}>
                <div>
                  Current location:{" "}
                  <pre>{JSON.stringify(this.state.currentPos, null, 2)}</pre>
                </div>
              </Popup>
            </Marker>
          )}
          {this.state.data.map(
            ({ id, from_lat, from_long, to_lat, to_long }) => {
              return (
                <Polyline
                  key={id}
                  positions={[
                    [from_lat, from_long],
                    [to_lat, to_long]
                  ]}
                  color={"red"}
                />
              );
            }
          )}
        </Map>
      </div>
    );
  }
}
