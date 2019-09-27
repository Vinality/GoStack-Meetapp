import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {
  Container, Logo, Form, Input, Button,
} from './styles';
import logomeetapp from '../../logos/logo.svg';
import { Creators as SignupActions } from '../../store/ducks/signup';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  handleUser = (e) => this.setState({ username: e.target.value });

  handleEmail = (e) => this.setState({ email: e.target.value });

  handlePass = (e) => this.setState({ password: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = this.state;
    const { UserSignupRequest } = this.props;

    UserSignupRequest(username, email, password);
  };

  handleClick = (e) => {
    e.preventDefault();
    this.props.history.push('/');
  };

  render() {
    const { username, password, email } = this.state;

    return (
      <Container>
        <Logo src={logomeetapp} alt="Meetapp" />
        <Form onSubmit={this.handleSubmit}>
          <Input
            value={username}
            onChange={this.handleUser}
            placeholder="Digite seu nome"
          />
          <Input
            value={email}
            onChange={this.handleEmail}
            type="email"
            placeholder="Digite seu email"
          />
          <Input
            value={password}
            onChange={this.handlePass}
            type="password"
            placeholder="Digite sua senha"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <Link to="/">Já tenho conta</Link>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.signup.error,
  data: state.signup.data,
  errorMessage: state.signup.errorMessage,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ ...SignupActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);
