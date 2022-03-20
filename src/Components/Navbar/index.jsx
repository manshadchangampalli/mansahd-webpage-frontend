import React, {  useState } from "react";
import { ArrowIcon, Images, InfoButton, Linkto, MainNav, MainNavItem, MainNavText, Nav, NavItem, NavItems, NavRoundBottom, NavRoundTop } from "./NavElements";
import HomeImg from '../../Assets/images/navImages/Home.png'
import ProjectImg from '../../Assets/images/navImages/Projects.png'
import CodeImg from '../../Assets/images/navImages/code.png'
import Contact from '../../Assets/images/navImages/contact.png'
import ArrowImg from '../../Assets/images/navImages/Arrow.png' 
import { Link, useLocation} from 'react-router-dom';

function NavBar() {
  const [isShow,setIsShow] = useState(false)
  const {pathname} = useLocation()
  const showMainNav = () =>{
    setIsShow(!isShow)
  } 
  const showMainNavByImg = () =>{
    setIsShow(!isShow)
    }
    // console.log(pathname )
  return (
    <>
    <InfoButton>
      i
    </InfoButton>
    <Nav>
      <NavRoundTop />
      <NavRoundBottom />
      <NavItems>

        <Link to="/">
          <NavItem>
            <Images active={pathname==="/"?true:false} onDoubleClick={showMainNavByImg} src={HomeImg}/>
          </NavItem>
        </Link>

        <Link to="/projects">
          <NavItem>
            <Images active={pathname==="/projects"?true:false} onDoubleClick={showMainNavByImg} src={ProjectImg}/>
          </NavItem>
        </Link>

        <Link to="/library">
            <NavItem>
              <Images active={pathname==="/library"?true:false} onDoubleClick={showMainNavByImg} src={CodeImg}/>
            </NavItem>
        </Link>

          <Link to="/contact">
            <NavItem>
              <Images active={pathname==="/contact"?true:false} onDoubleClick={showMainNavByImg} src={Contact}/>
            </NavItem>
          </Link>

      </NavItems >     
    </Nav>
    <ArrowIcon isShow={isShow} onClick={showMainNav} src={ArrowImg} alt="arrow"/>
    <MainNav isShow={isShow}>
      <NavItems>
        
        <Linkto to="/">
        <MainNavItem>
          <Images  src={HomeImg}/>
          <MainNavText>Home</MainNavText>
        </MainNavItem>
        </Linkto>

        <Linkto to="/projects">
        <MainNavItem>
          <Images  src={ProjectImg}/>
          <MainNavText>Projects</MainNavText>
        </MainNavItem>
        </Linkto>

        <Linkto to="/library">
        <MainNavItem>
          <Images  src={CodeImg}/>
          <MainNavText>Libraries</MainNavText>
        </MainNavItem>
        </Linkto>

        <Linkto to="/contact">
        <MainNavItem>
          <Images  src={Contact}/>
          <MainNavText>Contact</MainNavText>
        </MainNavItem>
        </Linkto>

      </NavItems>
    </MainNav>

    </>
  );
}

export default NavBar;
