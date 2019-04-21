import React, { Component } from "react";
import { Container } from "./styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as UsersActions } from "../../store/ducks/user";

class FirstAccess extends Component {
  state = {
    username: "",
    front: false,
    back: false,
    mobile: false,
    devops: false,
    gestao: false,
    marketing: false
  };

  componentWillMount() {
    const { username } = this.props.data;
    this.setState({ username });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { back, front, mobile, devops, gestao, marketing } = this.state;

    const { UserUpdateRequest } = this.props;
    const { token } = this.props.data;

    UserUpdateRequest(back, front, mobile, devops, gestao, marketing, token);
  };

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
      <Container>
        <h2>Olá {this.state.username}</h2>
        <p>
          Parece que é seu primeiro acesso por aqui, comece escolhendo algumas
          preferências para selecionarmos os melhores meetups pra você:
        </p>
        <h4>Preferências:</h4>
        <form onSubmit={this.handleSubmit}>
          <input type="checkbox" name="back" onChange={this.checkBack} />
          Back-end <br />
          <input type="checkbox" name="front" onChange={this.checkFront} />
          Front-end <br />
          <input type="checkbox" name="mobile" onChange={this.checkMobile} />
          Mobile <br />
          <input type="checkbox" name="devops" onChange={this.checkDevops} />
          Devops <br />
          <input type="checkbox" name="gestao" onChange={this.checkGestao} />
          Gestão <br />
          <input
            type="checkbox"
            name="marketing"
            onChange={this.checkMarketing}
          />
          Marketing <br />
          <button type="submit">Continuar</button>
        </form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  data: state.user.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...UsersActions }, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstAccess));
