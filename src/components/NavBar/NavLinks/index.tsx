import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { LinksList, ListItem, Icon } from './style';

import HomeIcon from '../../../assets/image/home.svg';
import CookbookIcon from '../../../assets/image/cookbook.svg';
import MenuIcon from '../../../assets/image/meus-menus.svg';
import EquipamentIcon from '../../../assets/image/equipamentos.svg';
import UserIcon from '../../../assets/image/usuarios.svg';
import AttendanceIcon from '../../../assets/image/atendimento.svg';
import { NavLink } from 'react-router-dom';

type LinksProps = {
  hidden: boolean;
};

const Links: FC<LinksProps> = (props) => {

	const checkActive = (match: any, location: any) => {
		//some additional logic to verify you are in the home URI
		if (!location) return false;
		const { pathname } = location;
		return (pathname === "/home")
	}

  return (
    <LinksList>
      <ListItem>
        <NavLink to='/login'>
          {!props.hidden && 'Tela 1'}
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/profile' >
          {!props.hidden && 'Tela 2'}
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/serie'>
          {!props.hidden && 'Tela 3'}
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/project' >
          {!props.hidden && 'Tela 4'}
        </NavLink>
      </ListItem>
    </LinksList>
  );
};

export default Links;
