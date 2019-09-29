import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment/min/moment-with-locales';
import Header from '../../Components/Header';
import { Creators as MeetupActions } from '../../store/ducks/meetup';
import {
  Container,
  Title,
  Meetup,
  Img,
  ImgContainer,
  Button,
  Text,
} from './styles';

moment.locale('pt-br');

class MeetupDetail extends Component {
  async componentDidMount() {
    const { GetRequest } = this.props;
    await GetRequest(this.props.match.params.id);
  }

  subscribed = () => {
    const storage = JSON.parse(sessionStorage.getItem('@meetapp:user'));
    const { id } = storage;
    const { meetups } = this.props;
    const meetup = meetups.data[0];

    if (!meetup) return false;
    if (!meetup.join) return false;

    const index = meetup.join.findIndex((user) => user.id === id);
    if (index >= 0) return true;

    return false;
  }

  handleClick = async (id) => {
    if (this.subscribed()) {
      await this.props.UnsubscribeMeetup(id);
    } else {
      await this.props.SubscribeMeetup(id);
    }
  }

  render() {
    const meetup = this.props.meetups.data[0];
    const { loading } = this.props.meetups;
    const text = this.subscribed() ? 'Cancelar Inscrição' : 'Inscrever-se';

    return (
      <div>
        <Header />
        {meetup && (
        <Container>
          <Meetup classes={{ root: 'my-root-class' }}>
            <ImgContainer>
              <Img src={meetup.file.url} />
            </ImgContainer>
            <Title>{meetup.title}</Title>
            <Text>{meetup.description}</Text>
            <Title>
              Onde e quando
            </Title>
            <Text>{meetup.location}</Text>
            <Text>{moment(meetup.when).format('d [de] MMMM [de] YYYY')}</Text>
            <Button onClick={() => this.handleClick(meetup.id)}>
              {loading ? <FontAwesomeIcon icon={faSpinner} /> : text}
            </Button>
          </Meetup>
        </Container>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  meetups: state.meetup,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ ...MeetupActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MeetupDetail);
