import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import { FaTimes } from 'react-icons/fa';
import {
  NavbarContainer,
  Nav,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
} from './NavbarStyles';
import { data } from '../../data/NavbarData';

function Navbar() {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const windowScrolled = () => {
    window.scrollY >= 200
      ? setScroll((scroll) => true)
      : setScroll((scroll) => false);
  };
  const handleClick = () => {
    setShow(!show);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const closeMobileMenu = (to: string, id?: string) => {
    if (id && location.pathname === '/') {
      scrollTo(id);
    }
    navigate(to);
    setShow(false);
  };

  useEffect(() => {
    windowScrolled();
    window.addEventListener('scroll', windowScrolled);
  }, []);

  const navLinks = data.map((el, index) => (
    <NavItem key={index}>
      <NavLinks
        onClick={() => {
          window.scrollTo(0, 0);
          closeMobileMenu(el.to, el.id);
        }}
      >
        {el.text}
      </NavLinks>
    </NavItem>
  ))

  const menuButton = show ? <FaTimes /> : <MdMenu />

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav scroll={scroll}>
        <NavbarContainer>
          <MobileIcon onClick={handleClick}>
            {menuButton}
          </MobileIcon>
          <NavMenu show={show}>
            {navLinks}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
}

export default Navbar;
