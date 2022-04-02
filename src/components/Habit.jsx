import styled from "styled-components";
import axios from "axios";

import { useContext, useState } from "react";
import HabitContext from "../contexts/HabitContext";

export default function Habit( {habit} ){
    const {id, name, days} = habit;
    const deleteHabitURL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
    const { loadUserHabits, deletingHabit, setDeletingHabit, config } = useContext(HabitContext);
    
    function confirmDeleteHabit(){
        setDeletingHabit(true);
        
    }

    function deleteUserHabit(){
        axios.delete(deleteHabitURL, config)
        .then((response) => {
            console.log("deleting");
            console.log(deleteHabitURL);
            setDeletingHabit(false);
            loadUserHabits();
        })
        .catch(error => {
            alert(error.response.data.message);
        });
    }

    return(
        <HabitContent>
            <div>
                <p>{name}</p>
                {
                    days.map(day => day)
                }
            </div>
            <ion-icon onClick={() => confirmDeleteHabit()} name="trash-outline"></ion-icon>
            {deletingHabit
                ?
                    <DeleteHabit>
                        <p>Deletar hábito?</p>
                        <div>
                            <button onClick={() => deleteUserHabit()} >Sim</button>
                            <button onClick={() => setDeletingHabit(false)} >Não</button>
                        </div>
                    </DeleteHabit>
                :
                    <></>
            }
        </HabitContent>
    );
}

const HabitContent = styled.div`

`;

const DeleteHabit = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:  #0000ff22;
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 1;
`;
