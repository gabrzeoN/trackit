import styled from "styled-components";
import axios from "axios";
import dayjs from "dayjs";

import { useContext, useState, useEffect } from "react";

import Header from "../Header";
import Footer from "../Footer";
import TodayHabit from "../TodayHabit";
import UserContext from "../../contexts/UserContext";

export default function TodayPage(){
    const { userData, userTodaysHabits, setUserTodaysHabits, userTodaysHabitsDone, setUserTodaysHabitsDone } = useContext(UserContext);
    const config = {
        headers: {
            "Authorization" : `Bearer ${userData.token}`
        }
    }
    const getTodaysHabitsURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

    function loadUserTodaysHabits(){
        axios.get(getTodaysHabitsURL, config)
        .then(({data}) => {
            if(data){
                let aux = 0;
                data.forEach((habit) => {
                    if(habit.done){
                        aux++;
                    }
                });
                setUserTodaysHabitsDone(aux);
            }
            setUserTodaysHabits([...data]);
        })
        .catch(error => {
            alert(error.response.data.message);
        }); 
    }

    function countPercentage(){
        return ( userTodaysHabitsDone /  userTodaysHabits.length) * 100;
    }

    useEffect(() => {
        loadUserTodaysHabits();
    }, []);

    function translateWeekday(day){
        switch(day){
            case 0:
                day = "Domingo";
                break;
            case 1:
                day = "Segunda";
                break;
            case 2:
                day = "Terça";
                break;
            case 3:
                day = "Quarta";
                break;
            case 4:
                day = "Quinta";
                break;
            case 5:
                day = "Sexta";
                break;
            case 6:
                day = "Sábado";
                break;
        }
        return day
    }
    const weekdayNumber = dayjs().day();
    const weekdayName = translateWeekday(weekdayNumber);

    return(
        <>
            <Header />
            <Main onClick={() => countPercentage()}>
                <Top>
                    <h1>{weekdayName + dayjs().format(', DD/MM')}</h1>
                    {userTodaysHabits.length !== 0
                        ?
                            <p>{Math.round(countPercentage())}% dos hábitos concluídos</p>
                        :
                            <p>Nenhum hábito concluído ainda</p>
                    }
                </Top>
                <TodaysHabits>
                    {
                        userTodaysHabits.map((todayHabit) => {
                            return <TodayHabit key={todayHabit.id} todayHabit={todayHabit} loadUserTodaysHabits={loadUserTodaysHabits} />
                        })
                    }
                </TodaysHabits>
            </Main>
            <Footer />
        </>
    );
}

const Main = styled.main`
    background-color: yellow;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 36px;
    margin-top: 70px;
    margin-bottom: 100px;
`;

const Top = styled.section`
    background-color: #FAFF33;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const TodaysHabits = styled.section`

`;