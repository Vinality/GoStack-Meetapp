import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Error,
  FormContainer,
  Input,
  Form,
  Text,
  Button,
  Title,
} from './styles';
import Header from '../../Components/Header';
import { Creators as UsersActions } from '../../store/ducks/user';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirm: '',
      error: '',
    };
  }

  componentDidMount() {
    const session = JSON.parse(sessionStorage.getItem('@meetapp:user'));
    this.setState({
      username: session.username,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { username, password, confirm } = this.state;

    if (password !== confirm) {
      this.setState({ error: true });
      return;
    }

    const { UserUpdateProfileRequest } = this.props;
    const { token } = this.props.data;

    UserUpdateProfileRequest(token, username, password);
  };

  handleUser = (e) => this.setState({ username: e.target.value });

  handlePass = (e) => this.setState({ password: e.target.value });

  handleConfirm = (e) => this.setState({ confirm: e.target.value });

  render() {
    return (
      <div>
        <Header />
        <FormContainer>
          <Title>Editar perfil</Title>
          {this.state.error !== '' && <Error>As senhas devem coincidir!</Error>}
          <Form onSubmit={this.handleSubmit}>
            <Text>Nome</Text>
            <Input
              value={this.state.username}
              onChange={this.handleUser}
              placeholder="Digite seu nome"
            />
            <Text>Senha</Text>
            <Input
              value={this.state.password}
              onChange={this.handlePass}
              type="password"
              placeholder="Digite sua senha"
            />
            <Text>Confirmação de senha</Text>
            <Input
              value={this.state.confirm}
              onChange={this.handleConfirm}
              type="password"
              placeholder="Confirme sua senha"
            />
            <Button type="submit">Salvar</Button>
          </Form>
        </FormContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.user.data,
  error: state.user.error,
  errorMessage: state.user.errorMessage,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ ...UsersActions }, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Profile),
);
