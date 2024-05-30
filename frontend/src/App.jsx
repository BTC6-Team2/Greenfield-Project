import React, { useState } from "react";
import Header from "./compronents/Header";
import SearchBar from "./compronents/SearchBar";
import DisplayResult from "./compronents/DisplayResult";
import DisplayDetail from "./compronents/DisplayDetail";

const App = () => {
  const [searchWord, setSearchWord] = useState("");

  return (
    <div>
      <Header />
      <SearchBar setSearchWord={setSearchWord} />
      <h1>{searchWord}</h1>
      <DisplayResult searchWord={searchWord} />
      {/* <DisplayDetail /> */}
    </div>
  );
};

export default App;
