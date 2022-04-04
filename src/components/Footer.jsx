import styled from "styled-components";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
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
            <Link to="/habitos" >
                <p>Hábitos</p>
            </Link>
            <div>
                <Link to="/hoje" >
                    <CircularProgressbar 
                        value={Math.round(countPercentage())} 
                        text={`Hoje`} 
                        styles={buildStyles({
                            textColor: '#ffffff', 
                            textSize:"25px", 
                            trailColor: '#52B6FF', 
                            pathColor: '#ffffff'
                        })} 
                    />
                </Link>
            </div>
            <Link to="/historico" >
                <p>Histórico</p>
            </Link>
        </FooterContent>
    );
}


const FooterContent = styled.header`
    background: #FFFFFF;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0px;
    right: 0px;
    left: 0px;
    z-index: 1;

    div{
        position: absolute;
        background-color: #52B6FF;
        padding: 6px;
        border-radius: 50%;
        width: 90px;
        height: 90px;
        top: -40px;
    }

    p{
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF; 
    }

`;