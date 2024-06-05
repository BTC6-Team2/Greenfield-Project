import React, { useState, useRef } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

const SearchBar = (props) => {
    const { setSearchWord } = props;
    const inputRef = useRef(null);

    return (
        <>
            <div className="search-bar">
                <Paper
                    component="form"
                    elevation={20}
                    sx={{
                        p: '2px 4px',
                        display: 'flex',
                        alignItems: 'center',
                        width: 400,
                    }}
                >
                    <InputBase
                        inputRef={inputRef}
                        id="inputText"
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="調べたいゴミの名前を入力してください"
                        inputProps={{ 'aria-label': 'search google maps' }}
                        onChange={(e) => {
                            console.log('word:', e.target.value);
                            setSearchWord(
                                e.target.value.length === 0
                                    ? undefined
                                    : e.target.value
                            );
                        }}
                    />
                    <IconButton
                        type="button"
                        sx={{ p: '10px' }}
                        aria-label="search"
                        onClick={() => setSearchWord(inputRef.current.value)}
                    >
                        <SearchIcon />
                    </IconButton>
                    <Divider
                        sx={{ height: 28, m: 0.5 }}
                        orientation="vertical"
                    />
                </Paper>
            </div>
        </>
    );
};

export default SearchBar;
