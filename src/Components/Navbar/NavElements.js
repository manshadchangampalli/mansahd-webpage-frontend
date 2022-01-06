import styled from "styled-components";

export const Nav = styled.nav`
    width: 60px;
    height: 400px;
    background: #000;
    position: fixed;
    left: 0;
    padding: 10px 5px;
    top: 50%;
    transform: translate(0,-50%);
    border-radius:0 40px 40px 0;
`
export const NavRoundTop = styled.div`
    position: absolute;
    top: -20px;
    left: 0;
    background: #000;
    width: 40px;
    height: 20px;
    &::before{
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        content:'';
        background-color:white ;
        border-radius: 0 0 0 40px;
    }
`
export const NavRoundBottom = styled.div`
    position: absolute;
    bottom: -20px;
    left: 0;
    background: #000;
    width: 40px;
    height: 20px;
    &::before{
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        content: '';
        background-color:white;
        border-radius:  40px 0 0 0;
    }
`
export const NavItems = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(4,1fr);
`