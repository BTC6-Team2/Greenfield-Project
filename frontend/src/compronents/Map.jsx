import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
    const position = [35, 135];

    return (
        // <div style={{ height: "500px", width: "400px", margin: "10px" }}>
        <div>
            <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={false}
                style={{ margin: "50px", height: "100vh", width: "100vw" }}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;
