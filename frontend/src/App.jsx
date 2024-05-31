import React, { useState } from "react";
import Header from "./compronents/Header";
import SearchBar from "./compronents/SearchBar";
import DisplayResult from "./compronents/DisplayResult";
import DisplayDetail from "./compronents/DisplayDetail";
import SignIn from "./compronents/SignIn";

const App = () => {
    const [searchWord, setSearchWord] = useState("");
    const [success, setSuccess] = useState(false);

    return (
        <div>
            {!success ? (
                <SignIn setSuccess={setSuccess}></SignIn>
            ) : (
                <div>
                    <Header />
                    <SearchBar setSearchWord={setSearchWord} />
                    <DisplayResult searchWord={searchWord} />
                    {/* <DisplayDetail /> */}
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
