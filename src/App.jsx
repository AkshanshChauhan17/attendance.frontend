import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Nav from "./RC's/Nav";
import Dashboard from "./RC's/Dashboard";
import Authenticator from "./RC's/Authenticator";
import User from "./RC's/User";
import Admin from "./RC's/Admin";
function App() {
    return (
        <div className="main">  
            <div className="nav-section">
                <Nav />
            </div>      
            <div className="content-section">
                {
                    localStorage.getItem("token") ? 
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/user" element={<User />} />
                        <Route path="/admin" element={<Admin />} />
                    </Routes>
                    :
                    <Routes>
                        <Route path="/" element={<Authenticator />} />
                        <Route path="/dashboard" element={<Authenticator />} />
                        <Route path="/user" element={<Authenticator />} />
                        <Route path="/admin" element={<Authenticator />} />
                    </Routes>
                }
            </div>
        </div>
    )
}

export default App;