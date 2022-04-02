import styled from "styled-components";
import axios from "axios";

import Header from "../Header";
import Footer from "../Footer";
import CreateHabit from "../CreateHabit";
import UserContext from "../../contexts/UserContext";
import HabitContext from "../../contexts/HabitContext";

import { useEffect, useState, useContext } from "react";

export default function HabitsPage(){
    const getAllHabitsURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const { userData, userHabits, setUserHabits } = useContext(UserContext);
    const config = {
        headers: {
            "Authorization" : `Bearer ${userData.token}`
        }
    }

    const [creatingHabit, setCreatingHabit] = useState(false);
    const [creatingHabitData, setCreatingHabitData] = useState( {name: "", days: []} );

    function loadUserHabits(){
        axios.get(getAllHabitsURL, config)
        .then(({data}) => {
            alert("Getting habits from server!");
            // setUserHabits([]);
    
            // [
            //     {
            //         id: 1,
            //         name: "Nome do hábito",
            //         days: [1, 3, 5]
            //     },
            //     {
            //         id: 2,
            //         name: "Nome do hábito 2",
            //         days: [1, 3, 4, 6]
            //     }
            // ]
    
        })
        .catch(error => {
            alert(error.response.data.message);
            // setDisabled(false);
        });
    }

    useEffect(() => {
        // loadUserHabits();
        axios.get(getAllHabitsURL, config)
        .then(({data}) => {
            console.log(data);
            // alert("Getting habits from server!");
            // setUserHabits([]);
    
            // [
            //     {
            //         id: 1,
            //         name: "Nome do hábito",
            //         days: [1, 3, 5]
            //     },
            //     {
            //         id: 2,
            //         name: "Nome do hábito 2",
            //         days: [1, 3, 4, 6]
            //     }
            // ]
    
        })
        .catch(error => {
            alert(error.response.data.message);
            // setDisabled(false);
        });
    }, [userHabits]);

    return(
        <>
            <Header />
            <Main >
                <Top>
                    <h1>Meus hábitos</h1>
                    <button onClick={() => setCreatingHabit(true)}>+</button>
                </Top>
                {creatingHabit 
                    ?
                        <HabitContext.Provider value={ {creatingHabit, setCreatingHabit, creatingHabitData, setCreatingHabitData} } >
                            <CreateHabit/>
                        </HabitContext.Provider>
                    :
                        <></>
                }
                <p>
                    Você não tem nenhum hábito cadastrado ainda. 
                    Adicione um hábito para começar a trackear!
                </p>
            </Main>
            <Footer />
        </>
    );
}


const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0px 36px;
    margin-top: 70px;
    margin-bottom: 100px;

    h1{
        font-size: 23px;
        line-height: 29px;    
        color: #126BA5;
        margin-top: 28px;
        margin-bottom: 17px;
    }

    p{
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }
`;

const Top = styled.div`
    background-color: yellow;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        width: 40px;
        height: 35px;
    }
`;



