import React from "react";
import logomeetapp from "../../logo-white.svg";
import { Container, Img } from "./styles";
import { withRouter, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => (
  <Container>
    <Img border="0" alt="logo" src={logomeetapp} />
    <Link to="/dashboard">Home</Link>
    <Link to="/new">Novo</Link>
    <Link to="/profile" className="profile">
      <FontAwesomeIcon icon={faUser} />
    </Link>
  </Container>
);

export default withRouter(Header);
