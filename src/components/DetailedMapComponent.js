import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  LayerGroup,
  Tooltip,
  Circle,
} from "react-leaflet";

const DetailedMapComponent = () => {
  const center = [19.1955, 72.9652];
  const purpleOptions = { color: "orange" };

  const positionsArray = [
    [19.1953, 72.9651],
    [19.1954, 72.9652],
    [19.1956, 72.9658],
  ];

  return (
    <MapContainer
      center={center}
      zoom={100}
      className="map-component"
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LayerGroup>
        {positionsArray.map((x, y) => {
          return (
            <Marker key={y} position={x}>
              <Tooltip>{`Personnel ${y + 1}`}</Tooltip>
            </Marker>
          );
        })}

        <Circle center={center} pathOptions={purpleOptions} radius={100} />
      </LayerGroup>
    </MapContainer>
  );
};

export default DetailedMapComponent;
