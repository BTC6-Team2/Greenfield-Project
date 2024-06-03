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

// 現在地取得
const getCurrentPosition = () =>
    new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject)
    );

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

// !====================================
const Map = ({ geoList }) => {
    const isFirst = useRef(true);

    // 現在地情報
    const [currentPosition, setCurrentPosition] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setCurrentPosition([pos.coords.latitude, pos.coords.longitude]);
        });
    }, []);
    console.log('現在地の座標:', currentPosition);

    if (isFirst.current) {
        console.log('初回レンダリング');
        isFirst.current = false;
        return (
            <>
                <h2>Loding...</h2>;
                <img src={panToRee} alt="パン＆リー" />
            </>
        );
    } else {
        return (
            // <div style={{ height: "500px", width: "400px", margin: "10px" }}>
            <div>
                {/* ボタン(機能操作) */}
                <div>
                    <Button
                        variant="outlined"
                        // onClick={() => moveCurrentPosition()}
                    >
                        現在地
                    </Button>
                    {/* <Button variant="outlined" onClick={() => )}>
                        検索
                    </Button> */}
                </div>
                <MapContainer
                    // key={mapKey}
                    center={currentPosition}
                    zoom={10}
                    scrollWheelZoom={true}
                    style={{ margin: '50px', height: '60vh', width: '60vw' }}
                >
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        url="https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"
                    />
                    <Circle center={currentPosition} radius={30000} />
                    {/* 現在地ピン */}
                    <Marker
                        id="map"
                        position={currentPosition}
                        icon={DefaultIcon}
                    >
                        <Popup>現在地</Popup>
                    </Marker>

                    {/* ゴミ捨て場所を出力 */}
                    {geoList.length > 0
                        ? geoList.map((item) => {
                              //   console.log(item);
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
