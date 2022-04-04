import styled from "styled-components";
import axios from "axios";

import { useContext, useState } from "react";
import HabitContext from "../contexts/HabitContext";

export default function DeleteHabit( {id} ){
    const { loadUserHabits, deletingHabit, setDeletingHabit, config } = useContext(HabitContext);
    const deleteHabitURL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;

    function deleteUserHabit(id){
        if(window.confirm("Deseja deletar?")){
            axios.delete(deleteHabitURL, config)
            .then((response) => {
                setDeletingHabit(false);
                loadUserHabits();
            })
            .catch(error => {
                alert(error.response.data.message);
            });
        }
    }

    return(
            <DeleteHabitContent>
                <ion-icon onClick={() => deleteUserHabit()} name="trash-outline"></ion-icon>
            </DeleteHabitContent>
    );
}

const DeleteHabitContent = styled.div`
    ion-icon{
        color: #666666;
        font-size: 20px;
    }
`;
