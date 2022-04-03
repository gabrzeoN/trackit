import styled from "styled-components";
import axios from "axios";

import { useContext, useState } from "react";
import DeleteHabit from "./DeleteHabit";

export default function Habit( {habit} ){
    const {id, name, days} = habit;

    return(
        <HabitContent>
            <div>
                <p>{name}</p>
                <Weekdays>
                    <Day id={0} days={days} >D</Day>
                    <Day id={1} days={days} >S</Day>
                    <Day id={2} days={days} >T</Day>
                    <Day id={3} days={days} >Q</Day>
                    <Day id={4} days={days} >Q</Day>
                    <Day id={5} days={days} >S</Day>
                    <Day id={6} days={days} >S</Day>
                </Weekdays>
            </div>
            <DeleteHabit id={id} />
        </HabitContent>
    );
}

const HabitContent = styled.div`
    display: flex;
    border: 1px solid black;
    margin: 2px;
`;

const Weekdays = styled.div`
    display: flex;
    justify-content: space-between;
    width: 150px;
`;

const Day = styled.div`
    ${({id, days}) => days.includes(id) ? "background-color: #33ff00" : "background-color: red"}
`;