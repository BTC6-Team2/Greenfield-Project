import React, { useState } from "react";
import Header from "./compronents/Header";
import SearchBar from "./compronents/SearchBar";
import DisplayResult from "./compronents/DisplayResult";
import DisplayDetail from "./compronents/DisplayDetail";
import MapField from "./compronents/MapField";


const App = () => {
  const [searchWord, setSearchWord] = useState("");

  return (
    <div>
      <Header />
      <SearchBar setSearchWord={setSearchWord} />
      <DisplayResult searchWord={searchWord} />
      {/* <DisplayDetail /> */}
      <MapField />
    </div>
  );
};

export default App;
