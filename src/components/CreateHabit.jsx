import styled from "styled-components";
import axios from "axios";
import { useContext } from "react";
import HabitContext from "../contexts/HabitContext";
import UserContext from "../contexts/UserContext";

export default function CreateHabit(){
    const postHabitURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const { setCreatingHabit, creatingHabitData, setCreatingHabitData } = useContext(HabitContext);
    const { userData } = useContext(UserContext);
    const config = {
        headers: {
            "Authorization" : `Bearer ${userData.token}`
        }
    }

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
            axios.post(postHabitURL, creatingHabitData, config)
            .then(({data}) => {
                console.log(data);
                clearCreatingHabitData();
                hideCreateHabit();
            })
            .catch(error => {
                alert(error.response.data.message);
            });
        }
    }

    return (
        <CreateHabitContent>
            <form action="" onSubmit={createHabit}>
                <input 
                    type="text" 
                    required
                    placeholder="nome do hábito" 
                    value={creatingHabitData.name} 
                    onChange={(e) => setCreatingHabitData({...creatingHabitData, name: e.target.value})} 
                />
                <WeekdaysSelection>
                    <SelectWeekday type="button" value="D" days={creatingHabitData.days} id={0} onClick={() => toggleWeekday(0)} />
                    <SelectWeekday type="button" value="S" days={creatingHabitData.days} id={1} onClick={() => toggleWeekday(1)} />
                    <SelectWeekday type="button" value="T" days={creatingHabitData.days} id={2} onClick={() => toggleWeekday(2)} />
                    <SelectWeekday type="button" value="Q" days={creatingHabitData.days} id={3} onClick={() => toggleWeekday(3)} />
                    <SelectWeekday type="button" value="Q" days={creatingHabitData.days} id={4} onClick={() => toggleWeekday(4)} />
                    <SelectWeekday type="button" value="S" days={creatingHabitData.days} id={5} onClick={() => toggleWeekday(5)} />
                    <SelectWeekday type="button" value="S" days={creatingHabitData.days} id={6} onClick={() => toggleWeekday(6)} />
                </WeekdaysSelection>
                <div>
                    <button onClick={hideCreateHabit} >Cancelar</button>
                    <button type="submit" >Salvar</button>
                </div>
            </form>
        </CreateHabitContent>
    );
}

const CreateHabitContent = styled.section`

    div{
    }
    `;

const WeekdaysSelection = styled.div`
    display: flex;
`;

const SelectWeekday = styled.input`
    ${({id, days}) => {
        if(days.includes(id)){
            return "background-color: red; color: #50ff0b;";
        }else{
            return "background-color: yellow; color: #083538;";
        }
    }};
`;