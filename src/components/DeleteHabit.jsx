import styled from "styled-components";
import axios from "axios";

import { useContext, useState } from "react";
import HabitContext from "../contexts/HabitContext";

export default function DeleteHabit( {id} ){
    const { loadUserHabits, deletingHabit, setDeletingHabit, config } = useContext(HabitContext);
    const deleteHabitURL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
    
    // function confirmDeleteHabit(){
    //     setDeletingHabit(true);
    // }

    function deleteUserHabit(id){
        axios.delete(deleteHabitURL, config)
        .then((response) => {
            setDeletingHabit(false);
            loadUserHabits();
        })
        .catch(error => {
            alert(error.response.data.message);
        });
    }

    return(  
        <>
            <ion-icon onClick={() => deleteUserHabit()} name="trash-outline"></ion-icon>
            {deletingHabit
                ?
                    <DeleteHabitContent>
                        <p>Deletar hábito?</p>
                        <div>
                            <button onClick={() => deleteUserHabit()} >Sim</button>
                            <button onClick={() => setDeletingHabit(false)} >Não</button>
                        </div>
                    </DeleteHabitContent>
                :
                <></>
            }
        </>      
    );
}

const DeleteHabitContent = styled.div`
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
