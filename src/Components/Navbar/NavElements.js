import styled from "styled-components";
var mainColor = "#FFEBB8"
var whiteColor = "#FFFFFF"

export const Nav = styled.nav`
    width: 60px;
    height: 400px;
    background: ${whiteColor};
    position: fixed;
    left: 0;
    padding: 30px 5px;
    top: 50%;
    transform: translate(0,-50%);
    border-radius:0 30px 30px 0;
`
export const NavRoundTop = styled.div`
    position: absolute;
    top: -20px;
    left: 0;
    background: ${whiteColor};
    width: 40px;
    height: 20px;
    &::before{
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        content:'';
        background-color:${mainColor}; ;
        border-radius: 0 0 0 40px;
    }
`
export const NavRoundBottom = styled.div`
    position: absolute;
    bottom: -20px;
    left: 0;
    background: ${whiteColor};
    width: 40px;
    height: 20px;
    &::before{
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        content: '';
        background-color:${mainColor};
        border-radius:  40px 0 0 0;
    }
`
export const NavItems = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(4,1fr);
`
export const NavItem = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
`