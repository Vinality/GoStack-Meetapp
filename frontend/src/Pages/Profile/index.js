import React, { Component } from "react";
import { Container } from "./styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Header from "../../Components/Header";
import { Creators as UsersActions } from "../../store/ducks/user";

class Profile extends Component {
  state = {
    username: "",
    password: "",
    confirm: "",
    error: ""
  };

  componentWillMount() {
    this.setState({
      username: this.props.data.username
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    const { username, password, confirm } = this.state;

    if (password !== confirm) {
      this.setState({ error: true });
      return;
    }

    const { UserUpdateProfileRequest } = this.props;
    const token = this.props.data.token;

    UserUpdateProfileRequest(token, username, password);
  };

  handleUser = e => this.setState({ username: e.target.value });
  handlePass = e => this.setState({ password: e.target.value });
  handleConfirm = e => this.setState({ confirm: e.target.value });

  render() {
    return (
      <div>
        <Header />
        <Container>
          {this.state.error !== "" && <p>As senhas devem coincidir!</p>}
          <form onSubmit={this.handleSubmit}>
            <label>
              <h4>Nome</h4>
              <input
                value={this.state.username}
                onChange={this.handleUser}
                placeholder="Digite seu nome"
                className="textinput"
                defaultValue={this.state.username}
              />
            </label>
            <label>
              <h4>Senha</h4>
              <input
                value={this.state.password}
                onChange={this.handlePass}
                type="password"
                placeholder="Digite sua senha"
                className="textinput"
              />
            </label>
            <label>
              <h4>Confirmação de senha</h4>
              <input
                value={this.state.confirm}
                onChange={this.handleConfirm}
                type="password"
                placeholder="Confirme sua senha"
                className="textinput"
              />
            </label>
            <button type="submit">Continuar</button>
          </form>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.user.data,
  error: state.user.error,
  preferences: state.user.preferences,
  errorMessage: state.user.errorMessage
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...UsersActions }, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile)
);
