import React, { useState } from "react";
import { IconContext } from "react-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import {
  NavbarContainer,
  Nav,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavLogo,
} from "./NavbarStyles";
import { data } from "../../data/NavbarData";

function Navbar() {
  const [show, setShow] = useState(false);
  let navigate = useNavigate();
  let location = useLocation();

  const handleClick = () => {
    setShow(!show);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const closeMobileMenu = (to: string, id: any) => {
    if (id && location.pathname === "/") {
      scrollTo(id);
    }
    navigate(to);
  };

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <NavbarContainer>
          <MobileIcon onClick={handleClick}>
            {show ? <FaTimes /> : <CgMenuRight />}
          </MobileIcon>
          <NavMenu show={show}>
            {data.map((el, index) => (
              <NavItem key={index}>
                <NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
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
