import React, { Component } from "react";
import Header from "../../Components/Header";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as MeetupActions } from "../../store/ducks/meetup";
import ImgMediaCard from "../../Components/Card";
import moment from 'moment/min/moment-with-locales';

import { MeetupList } from './styles';

moment.locale('pt-br');

class Dashboard extends Component {

  componentDidMount = async () => {
    const { IndexRequest } = this.props;
    await IndexRequest();
  }

  render() {
    const { data } = this.props.meetups;

    return (
      <div>
        <Header />
        <MeetupList>
          {data && data.map((meetup, count) => {
            return (<ImgMediaCard
              title={meetup.title}
              url={meetup.file.url}
              when={moment(meetup.when).format('d [de] MMMM [de] YYYY')}
              id={meetup.id}
              key={count}
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
