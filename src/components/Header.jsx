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
    background-color: blue;
    height: 70px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
`;

// email: "a@b.com"
// id: 983
// image: "https://http.cat/411.jpg"
// name: "aa"
// password: ""
// token: ""