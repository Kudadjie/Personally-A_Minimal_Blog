import styled from "styled-components";
import logo from "../assets/personally-logo-mobile.svg";
import { useState } from "react";

// something weird
export default function Header(props) {
  const [toggleMenu, setToggleMenu] = useState(false);

  function toggleMenuHandler() {
    setToggleMenu((state) => (state ? false : true));
  }
  return (
    <Navigation>
      <img src={logo} alt="personally-logo" />
      <MenuButton onClick={toggleMenuHandler} toggle={toggleMenu}>
        <TopBar toggle={toggleMenu} />
        <MiddleBar toggle={toggleMenu} />
        <BottomBar toggle={toggleMenu} />
      </MenuButton>
    </Navigation>
  );
}

const Navigation = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-between;
`;

const MenuButton = styled.div`
  display: flex;
  justify-content: end;
  /* & {
    ${(props) => props.toggleMenu && `transform: translateY(-50px);`}
  } */
`;
const Hamburger = styled.div`
  width: 24px;
  height: 2px;
  background: black;
  transition: all 0.3s ease-in-out;
`;

const TopBar = styled(Hamburger)`
  position: absolute;
  transform: translateY(-16px);
  ${(props) => props.toggle && `transform: rotate(45deg);`}
`;

const MiddleBar = styled(Hamburger)`
  ${(props) => props.toggle && `background:transparent;`}
`;

const BottomBar = styled(Hamburger)`
  position: absolute;
  width: 18px;
  transform: translateY(16px);
  ${(props) => props.toggle && `transform: rotate(-45deg); width:24px;`}
`;

// open class
//
// 1. move entire button, hide middle bar
// btn {
//	transform: translateY(-50px)
// background:transparent;
//}
//
//middle bar {
//	background:transparent;
//}
//
// 2. Rotate other bars
// ::before {
//	transform: rotate(45deg) translate(35px, -35px);
//}
//
// ::after {
//	transform: rotate(-45deg) translate(35px, 35px);
//}
//
// close class
//Remove style class
