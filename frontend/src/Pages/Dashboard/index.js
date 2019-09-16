import React, { Component } from "react";
import Header from "../../Components/Header";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as MeetupActions } from "../../store/ducks/meetup";
import MeetupCard from "../../Components/MeetupCard";

import { MeetupList } from './styles';

class Dashboard extends Component {
  componentDidMount() {
    const { IndexRequest } = this.props;
    IndexRequest();
  }

  render() {
    const { data } = this.props.meetups;
    console.tron.log(data);
    return (
      <div>
        <Header />
        <MeetupList>
          {data.data && data.data.map(meetup => {
            return <MeetupCard
              title={meetup.title}
              date={meetup.when}
              file={meetup.file.url}
            ></MeetupCard>
          })}
        </MeetupList>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  meetups: state.meetup
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...MeetupActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
