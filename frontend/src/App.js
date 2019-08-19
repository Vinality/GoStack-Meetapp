import React, { Component } from "react";
import "./config/reactotron";
import { Provider } from "react-redux";
import store from "./store";
import GlobalStyle from "./styles";
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
        <GlobalStyle />
      </Provider>
    );
  }
}

export default App;
