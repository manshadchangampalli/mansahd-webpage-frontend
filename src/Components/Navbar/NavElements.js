import { Link } from "react-router-dom";
import styled from "styled-components";
import '../../Styles/_variable.scss'
var mainColor = "#FFEBB8"
var whiteColor = "#FFFFFF"
var blackColor = "#000000"
var family = "'Exo', sans-serif"

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
    z-index: 99999;
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

export const InfoButton = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid ${blackColor};
    display: grid;
    place-items: center;
    font-size: 16px;
    position: fixed;
    top: 15px;
    left: 5px;
    cursor: pointer;
    font-weight: 600;
    &:hover{
        color: red;
    }
`
export const Images = styled.img`
    cursor: pointer;
    padding-bottom: 5px;
    border-bottom: ${({active})=>active?"2px solid green":""};
    &:hover{
        border-bottom:2px solid #000;
    }
`
export const MainNav = styled.div`
    width: 180px;
    height: 400px;
    position: absolute;
    top: 50%;
    border: 1px solid #000;
    left: ${({isShow}) => isShow ?"120px":"-200px"};
    background:${whiteColor};
    border-radius: 20px;
    transform: translate(0,-50%);
    z-index: 999;
    padding: 30px 10px;
    transition: all .5s ease;
    grid-gap: 20px;
    div{
    align-items: center;

    }
`
export const MainNavItem = styled.div`

    width: 100%;
    height: 50px;
    display: grid;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    grid-gap: 20px;
    cursor:pointer;
    grid-template-columns: 40px 1fr;
    &:hover{
        background-color: #b3dfff;
    }
    img{
        justify-self: end;
    }
`
export const MainNavText = styled.p`
    font-size: 18px;
    font-family: ${family};
    font-weight: 500;
    justify-self: start;
`
export const ArrowIcon= styled.img`
    position: fixed;
    left: 80px;
    top: 50%;
    cursor: pointer;
    transition: all .5s ease;
    animation:${({isShow})=>isShow?"animTrue":"anim"} 4s linear infinite;
    z-index: 999999;


    @keyframes anim {
        0%{
            transform: translateX(-5px) rotate(0deg);
        }
        25%{
            transform: translateX(-0px) rotate(0deg);
        }
        50%{
            transform: translateX(5px) rotate(0deg);
        }
        75%{
            transform: translateX(-0px) rotate(0deg);
        }
        100%{
            transform: translateX(-5px) rotate(0deg);
        }

        
    }
    @keyframes animTrue{
        0%{
            transform: translateX(-5px) rotate(180deg);
        }
        25%{
            transform: translateX(-0px) rotate(180deg);
        }
        50%{
            transform: translateX(5px) rotate(180deg);
        }
        75%{
            transform: translateX(-0px) rotate(180deg);
        }
        100%{
            transform: translateX(-5px) rotate(180deg);
        }

    }
`
export const Linkto = styled(Link)`
    text-decoration: none;
    color: black;
`