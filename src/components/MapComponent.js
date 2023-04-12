// import React from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const MapContainer = () => {

//   const mapStyles = {
//     height: "80vh",
//     width: "100%"};

//   const defaultCenter = {
//     lat: 41.3851, lng: 2.1734
//   }

//   const locations = [
//     {
//       name: "Location 1",
//       location: {
//         lat: 41.3954,
//         lng: 2.162
//       },
//     },
//     {
//       name: "Location 2",
//       location: {
//         lat: 41.3917,
//         lng: 2.1649
//       },
//     },
//     {
//       name: "Location 3",
//       location: {
//         lat: 41.3773,
//         lng: 2.1585
//       },
//     },
//     {
//       name: "Location 4",
//       location: {
//         lat: 41.3797,
//         lng: 2.1682
//       },
//     },
//     {
//       name: "Location 5",
//       location: {
//         lat: 41.4055,
//         lng: 2.191
//       },
//     }
//   ];

//   return (
//      <LoadScript
//        googleMapsApiKey='AIzaSyBvVotr5NV96tIpdre7-e3iON35e48Uvdo'>
//         <GoogleMap
//           mapContainerStyle={mapStyles}
//           zoom={13}
//           center={defaultCenter}>
//          {
//             locations.map(item => {
//               return (
//               <Marker key={item.name}
//                 position={item.location}
//               />
//               )
//             })
//          }
//      </GoogleMap>
//      </LoadScript>
//   )
// }

// export default MapContainer;

import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayerGroup,
  Circle,
} from "react-leaflet";

const MapComponent = () => {
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
        <Marker position={position}>
          <Popup>Bandobast in Panchpakhadi!</Popup>
        </Marker>
        <Circle center={position} pathOptions={purpleOptions} radius={100} />
      </LayerGroup>
    </MapContainer>
  );
};

export default MapComponent;
