import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment/min/moment-with-locales';
import Header from '../../Components/Header';
import { Creators as MeetupActions } from '../../store/ducks/meetup';
import {
  Container, Title, Meetup, Img, ImgContainer, Button, Text,
} from './styles';

moment.locale('pt-br');

class MeetupDetail extends Component {
  async componentDidMount() {
    const { GetRequest } = this.props;
    await GetRequest(this.props.match.params.id);
  }

  render() {
    const meetup = this.props.meetups[0];

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
            <Button onClick={this.handleSubmit}>
              Participar
            </Button>
          </Meetup>
        </Container>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  meetups: state.meetup.data,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ ...MeetupActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MeetupDetail);
