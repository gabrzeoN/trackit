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
            .then(({data}) => {
                
                
                console.log(data)

                

                // const aux = [...userTodaysHabitsDone];
                // aux.splice(aux.indexOf(id), 1);
                // setUserTodaysHabitsDone([...aux]);
                setHabitDone(!habitDone);
                loadUserTodaysHabits();
            })
            .catch(error => console.log("desmarcar" + error.response));
        }else{
            axios.post(postSetHabitDoneURL, id,config)
            .then(({data}) => {
                
                
                console.log(data);

                // const aux = 0;
                // data.forEach((habit) => {
                //     if(habit.done){
                //         aux++;
                //     }
                // });
                // setUserTodaysHabitsDone(aux);



                // setUserTodaysHabitsDone([...userTodaysHabitsDone, id]);
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
            <Check id={id}  done={habitDone} onClick={() => toggleCheckHabit()} > {/*userTodaysHabitsDone={userTodaysHabitsDone}  */}
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

    h3 span{
        ${({done}) => {
            return (done 
                ? 
                    "color: #8FC549;"
                :
                    "color: #EBEBEB;"
            )
        }}
    }

    h4 span{
        ${({currentSequence, highestSequence}) => {
            return ((currentSequence >= highestSequence && highestSequence !=0) 
                ? 
                    "color: #8FC549;"
                :
                    "color: #EBEBEB;"
            )
        }}
    }

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