import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer(){
    return (
        <FooterContent>
            <h1>Footer Page</h1>
            <Link to="/habitos" >
                <p>habitos</p>
            </Link>
            <Link to="/hoje" >
                <p>hoje</p>
            </Link>
            <Link to="/historico" >
                <p>historico</p>
            </Link>
        </FooterContent>
    );
}


const FooterContent = styled.header`
    background-color: #00ff77;
    height: 100px; // 70 footer + 90 circle within
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0px;
    right: 0px;
    left: 0px;
`;