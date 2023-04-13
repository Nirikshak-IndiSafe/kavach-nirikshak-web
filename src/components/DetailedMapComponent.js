import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  LayerGroup,
  Tooltip,
  Circle,
  Popup,
} from "react-leaflet";

const DetailedMapComponent = ({ details, positionsArray }) => {
  console.log(details);
  const center = details.location.coordinates;
  const purpleOptions = { color: "orange" };

  //   useEffect(() => {
  //     if (details.name === "Political Rally") {
  //       positionsArray = [
  //         {
  //           name: "Tushar Bauskar",
  //           pos: [19.219608106932068, 73.09059486008876],
  //         },
  //         {
  //           name: "Utsav Khatu",
  //           pos: [19.16470576128801, 72.85430411928692],
  //         },
  //       ];
  //     }
  //   }, []);

  const positionsArray2 = [
    {
      name: "Tushar Bauskar",
      pos: [19.219608106932068, 73.09059486008876],
    },
    {
      name: "Utsav Khatu",
      pos: [19.16470576128801, 72.85430411928692],
    },
  ];

  const positionArray3 = [
    {
      name: "Asavari Ambavane",
      pos: [19.1959804, 72.9668719],
    },
    {
      name: "Chaitravi Chalke",
      pos: [19.019277766552968, 72.85635165011887],
    },
  ];

  const positionArray4 = [
    {
      name: "Shubham Nazare",
      pos: [19.079396141160142, 72.90627512772674],
    },
  ];

  const positionArray5 = [
    {
      name: "Saurabh Powar",
      pos: [19.02090885654951, 72.85599971620839],
    },
  ];

  return details && positionsArray2 ? (
    <>
      <MapContainer
        center={details.location.coordinates}
        zoom={15}
        className="map-component"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayerGroup>
          <>
            {(details.name === "Political Rally"
              ? positionsArray2
              : details.name === "College Event"
              ? positionArray3
              : details.name === "Technovanza"
              ? positionArray4
              : positionArray5
            ).map((position, index) => {
              return (
                <Marker key={index} position={position.pos}>
                  <Popup>{position.name}</Popup>
                </Marker>
              );
            })}
          </>
          {/* <Marker position={[19.219608106932068, 73.09059486008876]}>
            <Popup>Tushar Bauskar</Popup>
          </Marker>
          <Marker position={[19.16470576128801, 72.85430411928692]}>
            <Popup>Utsav Khatu</Popup>
          </Marker> */}
          <Circle
            center={center}
            pathOptions={purpleOptions}
            radius={details.radius}
          />
        </LayerGroup>
      </MapContainer>
    </>
  ) : (
    <></>
  );
};

export default DetailedMapComponent;
