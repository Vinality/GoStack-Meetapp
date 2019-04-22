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
    front: false,
    back: false,
    mobile: false,
    devops: false,
    gestao: false,
    marketing: false,
    error: ""
  };

  componentWillMount() {
    this.setState({
      username: this.props.data.username,
      front: this.props.preferences.front,
      back: this.props.preferences.back,
      mobile: this.props.preferences.mobile,
      devops: this.props.preferences.devops,
      gestao: this.props.preferences.gestao,
      marketing: this.props.preferences.marketing
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    const {
      username,
      password,
      confirm,
      front,
      back,
      mobile,
      devops,
      gestao,
      marketing
    } = this.state;

    if (password !== confirm) {
      this.setState({ error: true });
      return;
    }

    const { UserUpdateProfileRequest } = this.props;
    const token = this.props.data.token;

    UserUpdateProfileRequest(
      back,
      front,
      mobile,
      devops,
      gestao,
      marketing,
      token,
      username,
      password
    );
  };

  handleUser = e => this.setState({ username: e.target.value });
  handlePass = e => this.setState({ password: e.target.value });
  handleConfirm = e => this.setState({ confirm: e.target.value });

  checkBack = () => {
    this.setState({ back: !this.state.back });
  };
  checkFront = () => {
    this.setState({ front: !this.state.front });
  };
  checkMobile = () => {
    this.setState({ mobile: !this.state.mobile });
  };
  checkDevops = () => {
    this.setState({ devops: !this.state.devops });
  };
  checkGestao = () => {
    this.setState({ gestao: !this.state.gestao });
  };
  checkMarketing = () => {
    this.setState({ marketing: !this.state.marketing });
  };

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
            <h4>Preferências</h4>
            <label className="check">
              <input
                type="checkbox"
                name="back"
                onChange={this.checkBack}
                defaultChecked={this.state.back}
              />
              Back-end <br />
            </label>
            <label className="check">
              <input
                type="checkbox"
                name="front"
                onChange={this.checkFront}
                defaultChecked={this.state.front}
              />
              Front-end <br />
            </label>
            <label className="check">
              <input
                type="checkbox"
                name="mobile"
                onChange={this.checkMobile}
                defaultChecked={this.state.mobile}
              />
              Mobile <br />
            </label>
            <label className="check">
              <input
                type="checkbox"
                name="devops"
                onChange={this.checkDevops}
                defaultChecked={this.state.devops}
              />
              Devops <br />
            </label>
            <label className="check">
              <input
                type="checkbox"
                name="gestao"
                onChange={this.checkGestao}
                defaultChecked={this.state.gestao}
              />
              Gestão <br />
            </label>
            <label className="check">
              <input
                type="checkbox"
                name="marketing"
                onChange={this.checkMarketing}
                defaultChecked={this.state.marketing}
              />
              Marketing <br />
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
