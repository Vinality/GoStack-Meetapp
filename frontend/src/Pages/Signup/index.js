import React, { Component } from "react";
import logomeetapp from "../../logo.svg";
import { Container } from "./styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as SignupActions } from "../../store/ducks/signup";

class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  handleUser = e => this.setState({ username: e.target.value });
  handleEmail = e => this.setState({ email: e.target.value });
  handlePass = e => this.setState({ password: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { username, email, password } = this.state;
    const { UserSignupRequest } = this.props;

    UserSignupRequest(username, email, password);
  };

  render() {
    return (
      <Container>
        <img src={logomeetapp} alt="Meetapp" />
        <form onSubmit={this.handleSubmit}>
          Nome
          <input
            value={this.state.username}
            onChange={this.handleUser}
            placeholder="Digite seu nome"
          />
          Email
          <input
            value={this.state.email}
            onChange={this.handleEmail}
            type="email"
            placeholder="Digite seu email"
          />
          Senha
          <input
            value={this.state.password}
            onChange={this.handlePass}
            type="password"
            placeholder="Digite sua senha"
          />
          <button type="submit">Cadastrar</button>
          <a href="/">Já tenho conta</a>
        </form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  error: state.signup.error,
  data: state.signup.data,
  errorMessage: state.signup.errorMessage
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...SignupActions }, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Signup)
);
