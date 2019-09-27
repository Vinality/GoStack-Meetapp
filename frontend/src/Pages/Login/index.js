import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import {
  Container, Form, Input, Button, Logo, Error,
} from './styles';
import logomeetapp from '../../logos/logo.svg';
import { Creators as UsersActions } from '../../store/ducks/user';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleUser = (e) => this.setState({ username: e.target.value });

  handlePass = (e) => this.setState({ password: e.target.value });

  handleClick = (e) => {
    e.preventDefault();
    this.props.history.push('/signup');
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const { UserLoginRequest } = this.props;

    UserLoginRequest(username, password);
  };

  render() {
    const { error, errorMessage } = this.props;
    const { username, password } = this.state;

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Logo src={logomeetapp} alt="Meetapp" />
          {error && <Error>{errorMessage}</Error>}
          <Input
            value={username}
            onChange={this.handleUser}
            placeholder="Digite seu e-mail"
          />
          <Input
            value={password}
            onChange={this.handlePass}
            type="password"
            placeholder="Digite sua senha"
          />
          <Button type="submit" onClick={this.handleSubmit}>
            Entrar
          </Button>
        </Form>
        <Link to="/signup">Criar conta grátis</Link>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.user.error,
  data: state.user.data,
  errorMessage: state.user.errorMessage,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ ...UsersActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
