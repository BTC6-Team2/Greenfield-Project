import { Button } from '@mui/material';
import React from 'react';
import './Header.css';

const Header = () => {
    const logout = () => {
        fetch('http://localhost:3000/logout').then((res) => {
            console.log('logout処理できてるか res :', res.ok);
        });
    };
    return (
        <header className="header">
            <div className="empty"></div>
            <h2>ごみ出しアプリ</h2>

            <div className="logout">
                <button>
                    <a href="/logout">ログアウト</a>
                </button>
            </div>
        </header>
    );
};

export default Header;
