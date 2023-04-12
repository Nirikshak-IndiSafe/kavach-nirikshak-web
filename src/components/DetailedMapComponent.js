import React, { useEffect, useState } from 'react';
import {
    MapContainer,
    TileLayer,
    Marker,
    LayerGroup,
    Tooltip,
    Circle,
} from 'react-leaflet';

const DetailedMapComponent = ({ details, positionsArray }) => {
    console.log(details);
    const center = details.location.coordinates;
    const purpleOptions = { color: 'orange' };

    // const positionsArray = [
    //     [20.1953, 72.9651],
    //     [19.1954, 73.9652],
    //     [19.1956, 72.9658],
    // ];

    return details && positionsArray ? (
        <MapContainer
            center={details.location.coordinates}
            zoom={15}
            className='map-component'
            scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <LayerGroup>
                {positionsArray.map((x, idx) => {
                    console.log(x);

                    return (
                        <Marker key={idx} position={x.slice(1, 3)}>
                            <Tooltip>{`Personnel ${idx + 1}`}</Tooltip>
                        </Marker>
                    );
                })}

                <Circle
                    center={center}
                    pathOptions={purpleOptions}
                    radius={details.radius}
                />
            </LayerGroup>
        </MapContainer>
    ) : (
        <></>
    );
};

export default DetailedMapComponent;
