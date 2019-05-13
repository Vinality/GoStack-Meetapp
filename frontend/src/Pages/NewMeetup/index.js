import React, { Component } from "react";
// import logomeetapp from "../../logo.svg";
import { Container, Label, Preferences } from "./styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FileUpload from "../../Components/FileUpload";
import Header from "../../Components/Header";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as MeetupActions } from "../../store/ducks/meetup";
import { Creators as UserActions } from "../../store/ducks/user";

class NewMeetup extends Component {
  state = {
    title: "",
    description: "",
    when: new Date(),
    location: "",
    front: false,
    back: false,
    mobile: false,
    devops: false,
    gestao: false,
    marketing: false
  };

  handleTitle = e => this.setState({ title: e.target.value });
  handleDescription = e => this.setState({ description: e.target.value });
  handlePass = e => this.setState({ password: e.target.value });
  handleLocation = e => this.setState({ location: e.target.value });
  handleDate = date => {
    this.setState({ when: date });
  };
  checkBack = () => {
    this.setState({ back: !this.state.back });
  };
  checkFront = () => {
    this.setState({ front: !this.state.front });
  };
  checkMobile = () => {
    this.setState({ mobile: !this.state.mobile });
  };
  checkDevops = () => {
    this.setState({ devops: !this.state.devops });
  };
  checkGestao = () => {
    this.setState({ gestao: !this.state.gestao });
  };
  checkMarketing = () => {
    this.setState({ marketing: !this.state.marketing });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      title,
      description,
      when,
      front,
      back,
      mobile,
      devops,
      gestao,
      marketing,
      location
    } = this.state;
    const file = this.refs.fileRef.getState().fileName;
    const { MeetupCreateRequest, token } = this.props;

    MeetupCreateRequest(
      title,
      description,
      file,
      when,
      location,
      front,
      back,
      mobile,
      devops,
      gestao,
      marketing,
      token
    );
  };

  render() {
    return (
      <div>
        <Header />
        <Container>
          {/* <img src={logomeetapp} alt="Meetapp" /> */}
          <form onSubmit={this.handleSubmit} encType="multipart/form-data">
            <Label>
              <FileUpload ref="fileRef" />
            </Label>
            <Label>
              <h4>Titulo</h4>
              <input
                value={this.state.title}
                onChange={this.handleTitle}
                placeholder="Defina o título"
                className="textinput"
              />
            </Label>
            <Label>
              <h4>Descrição</h4>
              <input
                value={this.state.description}
                onChange={this.handleDescription}
                type="textinput"
                placeholder="Descreva seu meetup"
                className="textinput"
              />
            </Label>
            <Label>
              <h4>Data</h4>
              <DatePicker
                selected={this.state.when}
                onChange={this.handleDate}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="time"
                placeholderText="Selecione uma data"
                className="textinput"
              />
            </Label>
            <Label>
              <h4>Local</h4>
              <input
                value={this.state.location}
                onChange={this.handleLocation}
                type="textinput"
                placeholder="Onde acontecerá o Meetup?"
                className="textinput"
              />
            </Label>
            <Preferences>
              <h4>Preferências</h4>
              <label className="check">
                <input
                  type="checkbox"
                  name="back"
                  onChange={this.checkBack}
                  defaultChecked={this.state.back}
                />
                Back-end <br />
              </label>
              <label className="check">
                <input
                  type="checkbox"
                  name="front"
                  onChange={this.checkFront}
                  defaultChecked={this.state.front}
                />
                Front-end <br />
              </label>
              <label className="check">
                <input
                  type="checkbox"
                  name="mobile"
                  onChange={this.checkMobile}
                  defaultChecked={this.state.mobile}
                />
                Mobile <br />
              </label>
              <label className="check">
                <input
                  type="checkbox"
                  name="devops"
                  onChange={this.checkDevops}
                  defaultChecked={this.state.devops}
                />
                Devops <br />
              </label>
              <label className="check">
                <input
                  type="checkbox"
                  name="gestao"
                  onChange={this.checkGestao}
                  defaultChecked={this.state.gestao}
                />
                Gestão <br />
              </label>
              <label className="check">
                <input
                  type="checkbox"
                  name="marketing"
                  onChange={this.checkMarketing}
                  defaultChecked={this.state.marketing}
                />
                Marketing <br />
              </label>
              <button type="submit">Continuar</button>
            </Preferences>
          </form>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.meetup.error,
  data: state.meetup.data,
  errorMessage: state.meetup.errorMessage,
  token: state.user.data.token
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...MeetupActions, ...UserActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMeetup);
