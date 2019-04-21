import React from "react";
import logomeetapp from "../../logo-white.svg";
import { Container } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => (
  <Container>
    <img border="0" alt="logo" src={logomeetapp} />
    <a href="/dashboard">Início</a>
    <a href="/search">Buscar</a>
    <a href="/new">Novo Meetup</a>
    <a href="/profile" className="profile"><FontAwesomeIcon icon={faUser}/></a>
  </Container>
);

export default Header;
