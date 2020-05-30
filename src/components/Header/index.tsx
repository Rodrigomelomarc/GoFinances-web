import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { Container, Content } from './styles';

const Header: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="GoFinances logo" />

      <nav>
        <NavLink
          activeStyle={{
            opacity: 1,
            borderBottom: '1.5px solid #FF872C',
          }}
          exact
          to="/"
        >
          Listagem
        </NavLink>
        <NavLink
          activeStyle={{ opacity: 1, borderBottom: '1.5px solid #FF872C' }}
          to="/import"
        >
          Importar
        </NavLink>
      </nav>
    </Content>
  </Container>
);

export default Header;
