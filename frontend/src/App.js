import React, { Component } from 'react';
import './config/reactotron';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './store';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from './styles';
import Routes from './routes';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ToastContainer />
        <Routes />
        <GlobalStyle />
      </Provider>
    );
  }
}

export default App;
