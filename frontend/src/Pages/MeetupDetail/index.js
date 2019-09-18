import React, { Component } from "react";
import Header from "../../Components/Header";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as MeetupActions } from "../../store/ducks/meetup";

class MeetupDetail extends Component {

  componentDidMount = async () => {
    const { GetRequest } = this.props;
    await GetRequest(this.props.match.params.id);
  }

  render() {
    console.log(this.props.meetups[0]);
    return (
      <div>
        <Header />
        <h1>Hello world</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  meetups: state.meetup.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...MeetupActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MeetupDetail);
