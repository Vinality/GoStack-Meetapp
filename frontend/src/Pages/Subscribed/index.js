import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment/min/moment-with-locales';
import Header from '../../Components/Header';
import MeetupSub from '../../Components/MeetupSub';
import { Creators as SubscribeActions } from '../../store/ducks/subscribe';

import { MeetupList } from './styles';

moment.locale('pt-br');

class Subscribed extends Component {
  async componentDidMount() {
    const { GetSubscribed } = this.props;
    await GetSubscribed();
  }

  render() {
    const { subscribe } = this.props;

    return (
      <div>
        <Header />
        <MeetupList>
          {subscribe && subscribe.map((sub, count) => (
            <MeetupSub
              title={sub.meetup.title}
              when={sub.meetup.when}
              id={sub.meetup_id}
              key={count}
            />
          ))}
        </MeetupList>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  subscribe: state.subscribe.data,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ ...SubscribeActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Subscribed);
