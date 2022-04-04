import styled from "styled-components";

import DeleteHabit from "./DeleteHabit";

export default function Habit( {habit} ){
    const { name, days} = habit;

    return(
        <HabitContent>
            <div>
                <h2>{name}</h2>
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
            <DeleteHabit />
        </HabitContent>
    );
}

const HabitContent = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px 0px;
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 19px;

    h2{
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 7px;
    }
`;

const Weekdays = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Day = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    margin-right: 4px;
    font-size: 20px;
    line-height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;

    ${({id, days}) => {
        return days.includes(id) 
            ? 
                "background-color: #CFCFCF; color: white;"
            :
                "background-color: white; color: #CFCFCF;"
    }}
`;