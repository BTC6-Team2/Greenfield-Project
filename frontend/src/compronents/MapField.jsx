import React from "react";
import { useState, useEffect, useRef } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import axios from "axios";
import { Map } from "./Map";
import { Marker } from "./Marker";

require("dotenv").config({ path: "./.env" });


const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY; 

const render = (status) => {
  return <h1>{status}</h1>;
};


const MapField = () => {
  const position = {
    lat: 43.035718552968376,
    lng: 141.46244422700855,
  };

  return (
    <div className="flex flex-row w-1/2 justify-center">
      <Wrapper apiKey={apiKey} render={render}>
        <Map style={{ width: "100%", aspectRatio: "16 / 9" }} center={position}>
          <Marker position={position} />
        </Map>
      </Wrapper>
    </div>
  );
};

export default MapField;
