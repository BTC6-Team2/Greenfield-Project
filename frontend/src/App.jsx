import React, { useState } from "react";
import Header from "./compronents/Header";
import SearchBar from "./compronents/SearchBar";
import DisplayResult from "./compronents/DisplayResult";
import DisplayDetail from "./compronents/DisplayDetail";
import axios from "axios";

const App = () => {
  const [searchWord, setSearchWord] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const submitButton = async (e) => {
    e.preventDefault();
    try {
      const login = await axios.post("/api/login", { username, password });
      console.log(login);
      setMessage(login.data);
    } catch (err) {
      console.log(err);
      setMessage("dame");
    }
  };

  return (
    <div>
      <Header />
      <SearchBar setSearchWord={setSearchWord} />
      <DisplayResult searchWord={searchWord} />
      {/* <DisplayDetail /> */}
      <form action="/" onSubmit={submitButton}>
        <div>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <button type="submit">ログイン</button>
        </div>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default App;
