import React, { useState } from "react";
import Header from "./compronents/Header";
import SearchBar from "./compronents/SearchBar";
import DisplayResult from "./compronents/DisplayResult";
import DisplayDetail from "./compronents/DisplayDetail";
import SignIn from "./compronents/SignIn";
import Map from "./compronents/Map";
import RenderGroup from "./compronents/test";
// ずっかさん試し
import Mpp from "./compronents/Mapsample";
import "./App.css";

const App = () => {
    const [searchWord, setSearchWord] = useState("");
    const [success, setSuccess] = useState(false);

    return (
        <div>
            {!success ? (
                <SignIn setSuccess={setSuccess}></SignIn>
            ) : (
                <div className="main-container">
                    {/* <Dashboard></Dashboard> */}
                    <Header />
                    <SearchBar setSearchWord={setSearchWord} tas/>
                    <DisplayResult searchWord={searchWord} />
                    <RenderGroup></RenderGroup>
                    {/* <Map geoList={geoList} /> */}
                    {/* <Mpp></Mpp> */}
                </div>
            )}

            {/* <Header />
            <SearchBar setSearchWord={setSearchWord} />
            <DisplayResult searchWord={searchWord} />
            <DisplayDetail /> */}
        </div>
    );
};
export default App;

