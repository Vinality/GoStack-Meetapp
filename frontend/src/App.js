import React, { Component } from "react";
import "./config/reactotron";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import GlobalStyle from "./styles";
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
          <GlobalStyle />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
