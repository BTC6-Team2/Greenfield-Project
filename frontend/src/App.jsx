import React, { useState } from 'react';
import SignIn from './compronents/SignIn';
import Map from './compronents/Map';
// ずっかさん試し
import Mpp from './compronents/Mapsample';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { SearchBox } from './compronents/SearchBox';
import { NoMatch } from './compronents/NoMatch';

const App = () => {
    const [searchWord, setSearchWord] = useState('');

    return (
        <div>
            <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route
                    path="/items"
                    element={
                        <SearchBox
                            setSearchWord={setSearchWord}
                            searchWord={searchWord}
                        />
                    }
                />
                <Route path="*" element={<NoMatch />} />

                {/* <Header />
            <SearchBar setSearchWord={setSearchWord} />
            <DisplayResult searchWord={searchWord} />
            <DisplayDetail /> */}
            </Routes>
        </div>
    );
};
export default App;
