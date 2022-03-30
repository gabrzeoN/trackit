import axios from "axios";
import styled from "styled-components";

export default function RegisterPage(){

    function register(e){
        axios.post()
        .then(response => response)
        .catch(error => console.log(error.response.status));
    }


    return(
        <Main >
            <Logo>
                <h1>Login Page</h1>
            </Logo>
            <RegisterData>
                <form action="" onSubmit={e => register(e.target.value)}>
                    <input 
                        type="text"
                        placeholder="Email"
                        name=""
                        id=""
                    />
                    <input 
                        type="text"
                        placeholder="Senha"
                        name=""
                        id=""
                    />
                    <input 
                        type="text"
                        placeholder="Nome"
                        name=""
                        id=""
                    />
                    <input 
                        type="text"
                        placeholder="Foto"
                        name=""
                        id=""
                    />
                    <button type="submit" >Cadastrar</button>
                </form>
            </RegisterData>
            <p>Já tem uma conta? Faça login!</p>
        </Main>
    );
}



const Main = styled.main`
    background-color: yellow;
`;

const Logo = styled.section`

`;

const RegisterData = styled.section`

`;