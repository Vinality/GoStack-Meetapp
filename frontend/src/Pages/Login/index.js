import React, { Component } from "react";
import logomeetapp from "../../logo.svg";
import { Container } from "./styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { Creators as UsersActions } from "../../store/ducks/user";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleUser = e => this.setState({ username: e.target.value });
  handlePass = e => this.setState({ password: e.target.value });

  handleClick = e => {
    e.preventDefault();
    this.props.history.push("/signup");
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const { UserLoginRequest } = this.props;

    UserLoginRequest(username, password);
  };

  render() {
    return (
      <Container>
        <img src={logomeetapp} alt="Meetapp" />
        {this.props.error && <p>{this.props.errorMessage}</p>}
        <form onSubmit={this.handleSubmit}>
          Username
          <input
            value={this.state.username}
            onChange={this.handleUser}
            placeholder="Digite seu e-mail"
          />
          Senha
          <input
            value={this.state.password}
            onChange={this.handlePass}
            type="password"
            placeholder="Digite sua senha"
          />
          <button type="submit">Entrar</button>
        </form>
        <Link to='/signup'>Criar conta grátis</Link>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  error: state.user.error,
  data: state.user.data,
  errorMessage: state.user.errorMessage,
  firstAccess: state.user.firstAccess
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...UsersActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
