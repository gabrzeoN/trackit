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
    const [userTodaysHabits, setUserTodaysHabits] = useState([]);
    const [userTodaysHabitsDone, setUserTodaysHabitsDone] = useState(0);
    const [userData, setUserData] = useState(null);
 
    return(
        <UserContext.Provider value={ {userData, setUserData, userHabits, setUserHabits, userTodaysHabits, setUserTodaysHabits, userTodaysHabitsDone, setUserTodaysHabitsDone} } >
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