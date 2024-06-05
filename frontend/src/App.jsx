import React, { useState } from 'react';
import SignIn from './compronents/SignIn';
import Map from './compronents/Map';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SearchBox } from './compronents/SearchBox';
import { NoMatch } from './compronents/NoMatch';

const App = () => {
    const [searchWord, setSearchWord] = useState('undefined');

    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate replace to="/signin" />} />
                <Route path="/signin" element={<SignIn />} />
                {/* RouteはRedirect */}
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
            </Routes>
        </div>
    );
};
export default App;
