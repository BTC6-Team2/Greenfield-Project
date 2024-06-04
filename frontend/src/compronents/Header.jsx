import { Button } from "@mui/material";
import React from "react";

const Header = () => {
    const logout = () => {
        fetch("http://localhost:3000/logout").then((res) => {
            console.log("logout処理できてるか res :", res.ok);
        });
    };
    return (
        <header className="header">
            <h2>ごみ出しアプリ</h2>
            <div className="logout">
                {/* <button onClick={logout}>Logout</button> */}
                <button>
                    <a href="/logout">ログアウト</a>
                </button>
            </div>
        </header>
    );
};

export default Header;
