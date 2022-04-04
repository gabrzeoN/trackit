import styled from "styled-components";
import axios from "axios";

import UserContext from "../contexts/UserContext";

import { useState, useContext } from "react";

export default function TodayHabit( {todayHabit, loadUserTodaysHabits} ){
    const {id, name, done, currentSequence, highestSequence} = todayHabit;
    const { userData, userTodaysHabitsDone, setUserTodaysHabitsDone } = useContext(UserContext);
    const config = {
        headers: {
            "Authorization" : `Bearer ${userData.token}`
        }
    }
    const postSetHabitDoneURL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
    const postSetHabitUndoneURL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;

    const [habitDone, setHabitDone] = useState(done);

    function toggleCheckHabit(){
        console.log(id);
        if(habitDone){
            axios.post(postSetHabitUndoneURL, id,config)
            .then(response => {
                console.log("desmarcado")
                const aux = [...userTodaysHabitsDone];
                aux.splice(aux.indexOf(id), 1);
                setUserTodaysHabitsDone([...aux]);
                setHabitDone(!habitDone);
                loadUserTodaysHabits();
            })
            .catch(error => console.log("desmarcar" + error.response));
        }else{
            axios.post(postSetHabitDoneURL, id,config)
            .then(response => {
                console.log("marcado");
                setUserTodaysHabitsDone([...userTodaysHabitsDone, id]);
                setHabitDone(!habitDone);
                loadUserTodaysHabits();
            })
            .catch(error => console.log("marcar" + error.response));
        }
    }

    return(
        <TodayHabitContent>
            <div>
                <Name>{name}</Name>
                <CurrentSequence>{currentSequence}</CurrentSequence>
                <HighestSequence>{highestSequence}</HighestSequence>
            </div>
            <Check id={id} userTodaysHabitsDone={userTodaysHabitsDone} done={habitDone} onClick={() => toggleCheckHabit()} >
                <ion-icon name="checkbox" ></ion-icon>
            </Check>
        </TodayHabitContent>
    );
}


const TodayHabitContent = styled.div`
    background-color: white;
    width: 340px;
    height: 94px;
    border: 1px solid black;
    margin: 2px;

    color: black;

    display: flex;

    ion-icon{
        font-size: 70px;
    }
`;

const Name = styled.h2`

`;

const CurrentSequence = styled.p`

`;

const HighestSequence = styled.p`

`;

const Check = styled.button`
    border: 0px;
    background-color: red;
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    ion-icon{
        ${({id, userTodaysHabitsDone, done}) => {
            return done ? "color: #8FC549;" : "color: #EBEBEB;"  // userTodaysHabitsDone.includes(id) 
        }}
    }
`;