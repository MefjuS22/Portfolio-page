import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import {
  NavbarContainer,
  Nav,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
} from "./NavbarStyles";
import { data } from "../../data/NavbarData";

function Navbar() {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);
  let navigate = useNavigate();
  let location = useLocation();

  const windowScrolled = () =>{
    (window.scrollY >= 200) ? setScroll(scroll => true) : setScroll(scroll => false)
  }
  const handleClick = () => {
    setShow(!show);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const closeMobileMenu = (to: string, id?: string) => {
    
    if (id && location.pathname === "/") {
      scrollTo(id);
    }
    navigate(to);
    setShow(show => false)
  };

  useEffect(() => {
    windowScrolled()
    window.addEventListener("scroll", windowScrolled)
  },[])
  


  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav scroll={scroll}>
        <NavbarContainer>
          <MobileIcon onClick={handleClick}>
            {show ? <FaTimes /> : <MdMenu />}
          </MobileIcon>
          <NavMenu show={show}>
            {data.map((el, index) => (
              <NavItem key={index}>
                <NavLinks onClick={() => {
                  window.scrollTo(0, 0)
                  closeMobileMenu(el.to, el.id)
                  }}>
                  {el.text}
                </NavLinks>
              </NavItem>
            ))}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
}

export default Navbar;