import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer, Polyline } from "react-leaflet";

export default class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [1.3298700098535123, 103.82663726806642],
      zoom: 12,
      text: "Centre of Singapore",
      currentPos: null,
      data: [
        {
          id: "HSO_RCT",
          from_lat: 1.308684968569312,
          from_lng: 103.84879231452943,
          to_lat: 1.2938782089810292,
          to_lng: 103.85331451892854,
          color: "red"
        },
        {
          id: "HSO_NUS",
          from_lat: 1.308684968569312,
          from_lng: 103.84879231452943,
          to_lat: 1.29589372269724,
          to_lng: 103.77651214599611,
          color: "blue"
        }
      ],
      markers: [
        {
          key: "HSO",
          lat: 1.308684968569312,
          lng: 103.84879231452943,
          content: "LTA HQ"
        },
        {
          key: "RCT",
          lat: 1.2938782089810292,
          lng: 103.85331451892854,
          content: "Accenture Office"
        },
        {
          key: "NUS",
          lat: 1.29589372269724,
          lng: 103.77651214599611,
          content: "NUS"
        }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ currentPos: e.latlng });
  }

  render() {
    const { center, zoom, markers, text, currentPos } = this.state;

    return (
      <div className="leaflet-container">
        <Map center={center} zoom={zoom} onClick={this.handleClick}>
          <TileLayer
            url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
            maxZoom="18"
            id="mapbox/streets-v11"
            accessToken="pk.eyJ1IjoiZW1pamF5IiwiYSI6ImNrNmtqbXN6YzA0cHUzcnJyYWN4anRjMTEifQ.UIQ_UNwanG23WQJ5PvCYuw"
          />
          <Marker position={center}>
            <Popup>
              <div>{text}</div>
            </Popup>
          </Marker>
          {this.state.currentPos && (
            <Marker position={currentPos}>
              <Popup position={currentPos}>
                <div>
                  Current location:{" "}
                  <pre>{JSON.stringify(currentPos, null, 2)}</pre>
                </div>
              </Popup>
            </Marker>
          )}
          {markers.map(({ key, lat, lng, content }) => {
            return (
              <Marker key={key} position={[lat, lng]}>
                <Popup>
                  <div>{content}</div>
                </Popup>
              </Marker>
            );
          })}
          {this.state.data.map(
            ({ id, from_lat, from_lng, to_lat, to_lng, color }) => {
              return (
                <Polyline
                  key={id}
                  positions={[
                    [from_lat, from_lng],
                    [to_lat, to_lng]
                  ]}
                  color={color}
                />
              );
            }
          )}
        </Map>
      </div>
    );
  }
}
