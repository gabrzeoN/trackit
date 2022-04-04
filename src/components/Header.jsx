import styled from "styled-components";

import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Header(){
    const {userData} = useContext(UserContext);
    return (
        <HeaderContent >
            <h1>TrackIt</h1>
            <img src={userData.image} alt="User picture" />
        </HeaderContent>
    );
}

const HeaderContent = styled.header`
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    z-index: 1;
    padding: 0px 18px;

    h1{
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
    }

    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
`;