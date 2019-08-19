import React, { Component } from "react";
import Header from "../../Components/Header";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as UsersActions } from "../../store/ducks/user";

// import { Container } from './styles';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Hello World</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.user.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...UsersActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
