import React, { Component } from "react";
import Header from "../../Components/Header";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as MeetupActions } from "../../store/ducks/meetup";
import ImgMediaCard from "../../Components/Card";

import { MeetupList } from './styles';

class Dashboard extends Component {

  componentDidMount() {
    const { IndexRequest } = this.props;
    IndexRequest();
  }

  render() {
    const { data } = this.props.meetups;

    return (
      <div>
        <Header />
        <MeetupList>
          {data && data.map((meetup, id) => {
            return (<ImgMediaCard
              title={meetup.title}
              url={meetup.file.url}
              description={meetup.description}
              key={id}
            >
            </ImgMediaCard>)
          })}
        </MeetupList>
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
)(Dashboard);
