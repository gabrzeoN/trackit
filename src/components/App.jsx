import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
// import styledComponents from "styled-components";
import "../assets/css/reset.css";
import "../assets/css/style.css";

import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import TodayPage from "./pages/TodayPage.jsx";
import HabitsPage from "./pages/HabitsPage.jsx";
import HistoryPage from "./pages/HistoryPage.jsx";

import UserContext from "../contexts/UserContext";

export default function App(){
    const [userHabits, setUserHabits] = useState([]);
    // const [userData, setUserData] = useState(null);
    const [userData, setUserData] = useState({
        name: "Joe",
        image: "https://http.cat/411.jpg",
        email: "a@b.com",
        password: "123",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTgzLCJpYXQiOjE2NDg4NDIxMzl9.ePf8CI3-nPPKO01mDHr9DQyAdy124lV205kUrXzZDPc"
    });

    return(
        <UserContext.Provider value={ {userData, setUserData, userHabits, setUserHabits} } >
            <BrowserRouter>
                <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/cadastro" element={<RegisterPage />} />
                        <Route path="/hoje" element={<TodayPage />} />
                        <Route path="/habitos" element={<HabitsPage />} />
                        <Route path="/historico" element={<HistoryPage />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}