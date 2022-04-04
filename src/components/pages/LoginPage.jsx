import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from  'react-loader-spinner';
import UserContext from "../../contexts/UserContext";
import styled from "styled-components";
import axios from "axios";

import LogoImg from "../../assets/img/logo-trackit.png";

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
                <img src={LogoImg} alt="Logo" />
                <h1>TrackIt</h1>
            </Logo>
            <UserData>
                <form action="" onSubmit={login}>
                    <input 
                        placeholder="email"
                        value={loginData.email}
                        required
                        type="email"
                        disabled={disabled}
                        onChange={e => setLoginData({...loginData, email: e.target.value})}
                    />
                    <input 
                        placeholder="senha"
                        value={loginData.password}
                        required
                        type="password"
                        disabled={disabled}
                        onChange={e => setLoginData({...loginData, password: e.target.value})}
                    />
                    <button type="submit" disabled={disabled} >{disabled ? <ThreeDots height="100" width="100" color='white' ariaLabel='loading'/> : "Entrar"}</button>
                </form>
            </UserData>
            <Link to="/cadastro" >
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Main>
    );
}

const Main = styled.main`
    background-color: #FFFFFF;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input,
    button{
        width: 303px;
        height: 45px;
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
        border-radius: 5px;
        border: 1px solid #D5D5D5;
        margin: 6px 0px;
    }
    
    input{
        padding-left: 15px;
        color: #131313;
        &::placeholder{
            color: #DBDBDB;
        }
    }

    button{
        border: 0px;
        background: #52B6FF;
        font-size: 21px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        :hover{
            background: #126BA5;
        }
    }

    p{
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
        margin-top: 30px;
        :hover{
            color: #126BA5;
        }
    }
`;

const Logo = styled.section`
    font-family: 'Playball', cursive;
    font-size: 69px;
    line-height: 86px;
    text-align: center;
    color: #126BA5;
    margin-bottom: 80px;
    img{
        width: 180px;
        height: 130px;
    }
`;

const UserData = styled.section`
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;