import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

import styled from "styled-components";
import axios from "axios";

export default function LoginPage(){
    const postLoginURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    const navigate = useNavigate();
    const {setToken} = useContext(UserContext);
    const [disabled, setDisabled] = useState(false);
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    function login(event){
        event.preventDefault();
        setDisabled(true);
        
        axios.post(postLoginURL, userData)
        .then(({data}) => {
            setToken(data.token);
            navigate("/habitos");
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
                        value={userData.email}
                        required
                        type="email"
                        disabled={disabled}
                        onChange={e => setUserData({...userData, email: e.target.value})}
                    />
                    <input 
                        placeholder="Senha"
                        value={userData.password}
                        required
                        type="password"
                        disabled={disabled}
                        onChange={e => setUserData({...userData, password: e.target.value})}
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

`;

const UserData = styled.section`

`;