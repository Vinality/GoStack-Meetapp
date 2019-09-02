import React from "react";
import logowhite from "../../logos/logowhite.svg";
import { Container, Logo } from "./styles";
import { withRouter, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

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
