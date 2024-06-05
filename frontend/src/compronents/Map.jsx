import React, { useEffect, useState, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import { icon } from 'leaflet';
import defaultMarker from './icons/Default.png';
import brownMarker from './icons/Brown.png';
import panToRee from './icons/kabegami.gif';
// mui
import Button from '@mui/material/Button';

const DefaultIcon = icon({
    iconUrl: defaultMarker,
    iconSize: [20, 32],
    iconAnchor: [20 / 2, 32],
});

const BrownIcon = icon({
    iconUrl: brownMarker,
    iconSize: [20, 32],
    iconAnchor: [20 / 2, 32],
});

const Map = ({ geoList }) => {
    const getCurrentPosition = () =>
        new Promise((resolve, reject) =>
            navigator.geolocation.getCurrentPosition(resolve, reject)
        );

    const [mapKey, setMapKey] = useState(0);
    const [currentPosition, setCurrentPosition] = useState({ lat: 0, lng: 0 });

    useEffect(() => {
        moveCurrentPosition();
    }, []);

    const moveCurrentPosition = async () => {
        const location = await getCurrentPosition();
        setCurrentPosition({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
        });
        setMapKey(new Date().getTime());
    };

    const isFirst = useRef(true);

    console.log('現在地の座標:', currentPosition);
    if (isFirst.current) {
        isFirst.current = false;
        return <h2>ちょっと待ってね</h2>;
    } else {
        return (
            <div>
                <div>
                    <Button
                        variant="outlined"
                        onClick={() => moveCurrentPosition()}
                    >
                        現在地
                    </Button>
                </div>
                <MapContainer
                    key={mapKey}
                    center={[34.9535489612208, 137.1625172728763]}
                    zoom={15}
                    scrollWheelZoom={true}
                    style={{
                        margin: '20px auto',
                        height: '60vh',
                        width: '60vw',
                    }}
                >
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        url="https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"
                    />
                    <Circle
                        center={[34.9535489612208, 137.1625172728763]}
                        radius={1000}
                    />
                    <Marker
                        id="map"
                        position={[34.9535489612208, 137.1625172728763]}
                        icon={DefaultIcon}
                    >
                        <Popup>現在地</Popup>
                    </Marker>

                    {geoList.length > 0
                        ? geoList.map((item) => {
                              return (
                                  <Marker
                                      key={item.stationName}
                                      position={{
                                          lat: item.stationLatitude,
                                          lng: item.stationLongitude,
                                      }}
                                      icon={BrownIcon}
                                  >
                                      <Popup>{item.stationName}</Popup>
                                  </Marker>
                              );
                          })
                        : null}
                </MapContainer>
            </div>
        );
    }
};

export default Map;
