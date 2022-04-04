import styled from "styled-components";
import axios from "axios";
import { useContext, useState } from "react";
import { ThreeDots } from  'react-loader-spinner';
import HabitContext from "../contexts/HabitContext";

export default function CreateHabit(){
    const postHabitURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const { setCreatingHabit, creatingHabitData, setCreatingHabitData, loadUserHabits, config } = useContext(HabitContext);
    const [disabled, setDisabled] = useState(false);

    function hideCreateHabit(event){
        event ? event.preventDefault() : event = null;
        setCreatingHabit(false);
    }

    function clearCreatingHabitData(){
        setCreatingHabitData({name: "", days: []});
    }
    
    function toggleWeekday(weekday){
        let auxDays = [...creatingHabitData.days];
        if(!auxDays.includes(weekday)){
            setCreatingHabitData({...creatingHabitData, days: [...auxDays, weekday]});
        }else{
            auxDays.splice(auxDays.indexOf(weekday), 1);
            setCreatingHabitData({...creatingHabitData, days: [...auxDays]});
        }
    }

    function createHabit(e){
        e.preventDefault();

        if(creatingHabitData.days.length <= 0){
            alert("Nenhum dia da semana selecionado!");
        }else{
            setDisabled(true);
            axios.post(postHabitURL, creatingHabitData, config)
            .then(({data}) => {
                clearCreatingHabitData();
                hideCreateHabit();
                loadUserHabits();
            })
            .catch(error => {
                setDisabled(false);
                alert(error.response.data.message);
            });
        }
    }

    return (
        <CreateHabitContent>
            <form action="" onSubmit={createHabit}>
                <InputName 
                    type="text" 
                    required
                    placeholder="nome do hábito" 
                    value={creatingHabitData.name}
                    disabled={disabled} 
                    onChange={(e) => setCreatingHabitData({...creatingHabitData, name: e.target.value})} 
                />
                <WeekdaysSelection >
                    <SelectWeekday type="button" value="D" days={creatingHabitData.days} id={0} disabled={disabled} onClick={() => toggleWeekday(0)} />
                    <SelectWeekday type="button" value="S" days={creatingHabitData.days} id={1} disabled={disabled} onClick={() => toggleWeekday(1)} />
                    <SelectWeekday type="button" value="T" days={creatingHabitData.days} id={2} disabled={disabled} onClick={() => toggleWeekday(2)} />
                    <SelectWeekday type="button" value="Q" days={creatingHabitData.days} id={3} disabled={disabled} onClick={() => toggleWeekday(3)} />
                    <SelectWeekday type="button" value="Q" days={creatingHabitData.days} id={4} disabled={disabled} onClick={() => toggleWeekday(4)} />
                    <SelectWeekday type="button" value="S" days={creatingHabitData.days} id={5} disabled={disabled} onClick={() => toggleWeekday(5)} />
                    <SelectWeekday type="button" value="S" days={creatingHabitData.days} id={6} disabled={disabled} onClick={() => toggleWeekday(6)} />
                </WeekdaysSelection>
                <div>
                    <div>
                        <button onClick={hideCreateHabit} disabled={disabled} >Cancelar</button>
                        <button type="submit" disabled={disabled} >{disabled ? <ThreeDots height="50" width="50" color='white' ariaLabel='loading'/> : "Salvar"}</button>
                    </div>
                </div>
            </form>
        </CreateHabitContent>
    );
}

const CreateHabitContent = styled.section`
    display: flex;
    justify-content: space-between;
    margin: 5px 0px;
    width: 340px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 19px;

    div div{
        display: flex;
        justify-content: flex-end;
    }

    div button:first-child{
        width: 84px;
        height: 35px;
        background: #ffffff;
        border-radius: 5px;
        border: 0px;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #52B6FF;
    }

    div button:last-child{
        width: 84px;
        height: 35px;
        background: #52B6FF;
        border-radius: 5px;
        border: 0px;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const InputName = styled.input`
    width: 303px;
    height: 45px;
    padding-left: 15px;
    font-size: 20px;
    line-height: 25px;
    color: #131313;       
    border-radius: 5px;
    border: 1px solid #D5D5D5;
    margin: 6px 0px;
    &::placeholder{
        color: #DBDBDB;
    }
`;

const WeekdaysSelection = styled.div`
    display: flex;
    margin: 10px 0px;
`;

const SelectWeekday = styled.input`
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
        if(days.includes(id)){
            return "background-color: #CFCFCF; color: white;";
        }else{
            return "background-color: white; color: #CFCFCF;";
        }
    }};
`;