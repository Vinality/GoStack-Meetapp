import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Container, Logo } from './styles';
import logowhite from '../../logos/logowhite.svg';

const Header = () => (
  <Container>
    <Logo border="0" alt="logo" src={logowhite} />
    <Link to="/dashboard">Home</Link>
    <Link to="/new">Novo</Link>
    <Link to="/profile" className="profile">
      <FontAwesomeIcon icon={faUser} />
    </Link>
  </Container>
);

export default withRouter(Header);
