import styled from "styled-components";
import axios from "axios";

import UserContext from "../contexts/UserContext";

import { useState, useContext } from "react";

export default function TodayHabit( {todayHabit, loadUserTodaysHabits} ){
    const {id, name, done, currentSequence, highestSequence} = todayHabit;
    const { userData } = useContext(UserContext);
    const config = {
        headers: {
            "Authorization" : `Bearer ${userData.token}`
        }
    }
    const postSetHabitDoneURL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
    const postSetHabitUndoneURL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
    const [habitDone, setHabitDone] = useState(done);

    function toggleCheckHabit(){
        if(habitDone){
            axios.post(postSetHabitUndoneURL, id,config)
            .then(({data}) => {
                setHabitDone(!habitDone);
                loadUserTodaysHabits();
            })
            .catch(error => console.log("desmarcar" + error.response));
        }else{
            axios.post(postSetHabitDoneURL, id,config)
            .then(({data}) => {
                setHabitDone(!habitDone);
                loadUserTodaysHabits();
            })
            .catch(error => console.log("marcar" + error.response));
        }
    }

    return(
        <TodayHabitContent done={habitDone} currentSequence={currentSequence} highestSequence={highestSequence} >
            <div>
                <h2>{name}</h2>
                <h3>Sequência atual: <span>{currentSequence} {currentSequence > 1 ? "dias" : "dia"}</span></h3>
                <h4>Seu recorde: <span>{highestSequence} {highestSequence > 1 ? "dias" : "dia"}</span></h4>
            </div>
            <Check id={id}  done={habitDone} onClick={() => toggleCheckHabit()} >
                <ion-icon name="checkbox" ></ion-icon>
            </Check>
        </TodayHabitContent>
    );
}


const TodayHabitContent = styled.div`
    background-color: white;
    width: 340px;
    height: 94px;
    border-radius: 5px;
    margin: 5px 0px;
    padding: 13px;
    color: black;
    display: flex;
    justify-content: space-between;

    h2{
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 7px;
    }

    h3,
    h4{
        font-size: 13px;
        line-height: 16px;
        color: #666666;
    }

    h3 span{
        ${({done}) => {
            return (done 
                ? 
                    "color: #8FC549;"
                :
                    "color: #666666;"
            )
        }}
    }

    h4 span{
        ${({currentSequence, highestSequence}) => {
            return ((currentSequence >= highestSequence && highestSequence !== 0) 
                ? 
                    "color: #8FC549;"
                :
                    "color: #666666;"
            )
        }}
    }

    ion-icon{
        font-size: 70px;
    }
`;

const Check = styled.button`
    border: 0px;
    background: white;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    ion-icon{
        width: 70px;
        height: 70px;
        ${({done}) => {
            return done ? "color: #8FC549;" : "color: #EBEBEB;"
        }}
    }
`;