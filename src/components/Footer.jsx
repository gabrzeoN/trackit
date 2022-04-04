import styled from "styled-components";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import UserContext from "../contexts/UserContext";

export default function Footer(){
    const { userData, userTodaysHabits, userTodaysHabitsDone, setUserTodaysHabitsDone } = useContext(UserContext);

    function countPercentage(){
        return ( userTodaysHabitsDone /  userTodaysHabits.length) * 100;
    }

    return (
        <FooterContent>
            <h1>Footer Page</h1>
            <Link to="/habitos" >
                <p>habitos</p>
            </Link>
            <Link to="/hoje" >
                <p>hoje</p>
                <p>{Math.round(countPercentage())}</p>
                <div>
                    <CircularProgressbar value={Math.round(countPercentage())} text={`${Math.round(countPercentage())}%`} />;
                </div>
            </Link>
            <Link to="/historico" >
                <p>historico</p>
            </Link>
        </FooterContent>
    );
}


const FooterContent = styled.header`
    background-color: #00ff77;
    height: 100px; // 70 footer + 90 circle within
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0px;
    right: 0px;
    left: 0px;

    div{
        width: 70px;
        height: 70px;
    }

`;