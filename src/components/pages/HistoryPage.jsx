import styled from "styled-components";

import Header from "../Header";
import Footer from "../Footer";

export default function HistoryPage(){
    return(
        <>
            <Header />
            <Main >
                <h1>Histórico</h1>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Main>
            <Footer />
        </>
    );
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0px 36px;
    margin-top: 70px;
    margin-bottom: 130px;
    font-family: 'Lexend Deca';

    h1{
        font-size: 23px;
        line-height: 29px;    
        color: #126BA5;
        margin-top: 28px;
        margin-bottom: 17px;
    }

    p{
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }
`;