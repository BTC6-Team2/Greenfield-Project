import "./App.css";
import Contact from "./routes/contact";
import About from "./routes/about";
import Home from "./routes/home";
import NoMatch from "./routes/nomatch";

// ルーターを設定する
import { Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";

function App() {
    return (
        <div>
            <h1>Hello React Router v6</h1>
            <ul>
                <li>
                    <NavLink
                        style={({ isActive }) =>
                            isActive ? { color: "blue" } : undefined
                        }
                        to="/"
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        style={({ isActive }) =>
                            isActive ? { color: "blue" } : undefined
                        }
                        to="/about"
                    >
                        About`
                    </NavLink>
                </li>
            </ul>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/contact"
                    element={<Contact message="Hello Contact" />}
                />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </div>
    );
}

export default App;
