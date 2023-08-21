import { link } from 'fs/promises';
import React, { useState } from 'react';
import NavLinks from './NavLinks';
import { Nav, LeftArrow, Image, ButtonHidden, Text, Title, Icon, DivIcon } from './styles';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";


const NavBar = () => {
  const [backOffNav, setbackOffNav] = useState(false);
  const slideHandler = () => {
    setbackOffNav((prevState) => !prevState);
  };
  return (
    <Nav className={`${backOffNav ? 'back-off' : ''}`}>
      <NavLinks hidden={backOffNav} />
      <ButtonHidden onClick={slideHandler} className='button-hidden'>
        <LeftArrow className={`${backOffNav ? 'right' : 'left'}`} />
      </ButtonHidden>
    </Nav> 
  );
};

export default NavBar;
