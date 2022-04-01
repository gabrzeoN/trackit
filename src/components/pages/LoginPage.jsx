import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

import styled from "styled-components";
import axios from "axios";

export default function LoginPage(){
    const postLoginURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    const navigate = useNavigate();
    const {setUserData} = useContext(UserContext);
    const [disabled, setDisabled] = useState(false);
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    function login(event){
        event.preventDefault();
        setDisabled(true);
        
        axios.post(postLoginURL, loginData)
        .then(({data}) => {
            setUserData({...data, password: ""});
            navigate("/hoje");
        })
        .catch(error => {
            alert(error.response.data.message)
            setDisabled(false);
        });
    }

    return(
        <Main >
            <Logo>
                <h1>Login Page</h1>
            </Logo>
            <UserData>
            <form action="" onSubmit={login}>
                    <input 
                        placeholder="Email"
                        value={loginData.email}
                        required
                        type="email"
                        disabled={disabled}
                        onChange={e => setLoginData({...loginData, email: e.target.value})}
                    />
                    <input 
                        placeholder="Senha"
                        value={loginData.password}
                        required
                        type="password"
                        disabled={disabled}
                        onChange={e => setLoginData({...loginData, password: e.target.value})}
                    />
                    <button type="submit" disabled={disabled} >Entrar</button>
                </form>
            </UserData>
            <Link to="/cadastro" >
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Main>
    );
}



const Main = styled.main`
    background-color: red;
`;

const Logo = styled.section`
    font-family: 'Playball', cursive;
`;

const UserData = styled.section`

`;