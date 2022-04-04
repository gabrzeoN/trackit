import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from  'react-loader-spinner';

import LogoImg from "../../assets/img/logo-trackit.png";

export default function RegisterPage(){
    const postRegisterURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
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
        
        axios.post(postRegisterURL, registerData)
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
                <img src={LogoImg} alt="Logo" />
                <h1>TrackIt</h1>
            </Logo>
            <RegisterData>
                <form action="" onSubmit={register}>
                    <input 
                        placeholder="Email"
                        value={registerData.email}
                        required
                        type="email"
                        disabled={disabled}
                        onChange={e => setRegisterData({...registerData, email: e.target.value})}
                    />
                    <input 
                        placeholder="Senha"
                        value={registerData.password}
                        required
                        type="password"
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
                    <button type="submit" disabled={disabled} >{disabled ? <ThreeDots height="100" width="100" color='white' ariaLabel='loading'/> : "Cadastrar"}</button>
                </form>
            </RegisterData>
            <Link to="/" >
                <p>Já tem uma conta? Faça login!</p>
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
        font-size: 20.976px;
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

const RegisterData = styled.section`
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;