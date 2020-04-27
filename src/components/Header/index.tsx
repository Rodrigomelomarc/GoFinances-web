import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { Container, Content } from './styles';

const Header: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="GoFinances logo" />

      <nav>
        <NavLink to="/">Listagem</NavLink>
        <NavLink to="/import">Importar</NavLink>
      </nav>
    </Content>
  </Container>
);

export default Header;
