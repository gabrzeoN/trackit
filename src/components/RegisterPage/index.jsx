import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function RegisterPage(){
    const navigate = useNavigate();

    const [disabled, setDisabled] = useState(false);
    const [registerData, setRegisterData] = useState({
        email: "",
        password: "",
        name: "",
        image: ""
    })

    function register(event){
        event.preventDefault();

        setDisabled(true);
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", registerData)
        .then(({data}) => {
            console.log("deu certo");
            console.log(data);
            navigate("/");
        })
        .catch(error => {
            alert(error.response.data.message)
            setDisabled(false);
        });
    }


    return(
        <Main >
            <Logo>
                <h1>Register Page</h1>
            </Logo>
            <RegisterData>
                <form action="" onSubmit={register}>
                    <input 
                        placeholder="Email"
                        value={registerData.email}
                        required
                        type="text"
                        disabled={disabled}
                        onChange={e => setRegisterData({...registerData, email: e.target.value})}
                    />
                    <input 
                        placeholder="Senha"
                        value={registerData.password}
                        required
                        type="text"
                        disabled={disabled}
                        onChange={e => setRegisterData({...registerData, password: e.target.value})}
                    />
                    <input 
                        placeholder="Nome"
                        value={registerData.name}
                        required
                        type="text"
                        disabled={disabled}
                        onChange={e => setRegisterData({...registerData, name: e.target.value})}
                    />
                    <input 
                        placeholder="Foto"
                        value={registerData.image}
                        required
                        type="text"
                        disabled={disabled}
                        onChange={e => setRegisterData({...registerData, image: e.target.value})}
                    />
                    <button type="submit" disabled={disabled} >Cadastrar</button>
                </form>
            </RegisterData>
            <Link to="/" >
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </Main>
    );
}



const Main = styled.main`
    background-color: yellow;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 36px;
`;

const Logo = styled.section`

`;

const RegisterData = styled.section`
    form input,
    form button{
        width: 303px;
        height: 45px;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
    }
`;