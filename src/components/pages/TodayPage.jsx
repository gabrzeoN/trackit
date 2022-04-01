import styled from "styled-components";

import Header from "../Header";
import Footer from "../Footer";

export default function TodayPage(){
    const postRegisterURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const postHabitURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const getAllHabitsURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

   
    return(
        <>
            <Header />

            <Main >
                <Logo>
                    <h1>Today Page</h1>
                </Logo>
                <RegisterData>
            
                </RegisterData>
            
                
            </Main>

            <Footer />
        </>
    );
}

const Main = styled.main`
    background-color: yellow;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 36px;
    margin-top: 70px;
    margin-bottom: 100px;
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