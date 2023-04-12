import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayerGroup,
  Circle,
} from "react-leaflet";

const MapComponent = ({ events }) => {
  const position = [19.1955, 72.9652];
  const purpleOptions = { color: "red" };

  return (
    <MapContainer
      center={position}
      zoom={16}
      className="map-component"
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LayerGroup>
        {events.map((event) => {
          const position = event.location.coordinates;
          console.log(position)
          return (
            <>
              <Marker position={position}>
                <Popup>{event.name}</Popup>
              </Marker>
              <Circle
                center={position}
                pathOptions={purpleOptions}
                radius={100}
              />
            </>
          );
        })}
      </LayerGroup>
    </MapContainer>
  );
};

export default MapComponent;