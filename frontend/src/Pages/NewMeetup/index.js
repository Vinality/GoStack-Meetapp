import React, { Component } from "react";
// import logomeetapp from "../../logo.svg";
import {
  FormContainer,
  Input,
  Button,
  Form,
  DatePick,
  TextArea
} from "./styles";
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
    location: ""
  };

  handleTitle = e => this.setState({ title: e.target.value });
  handleDescription = e => this.setState({ description: e.target.value });
  handlePass = e => this.setState({ password: e.target.value });
  handleLocation = e => this.setState({ location: e.target.value });
  handleDate = date => {
    this.setState({ when: date });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, description, when, location } = this.state;
    const { file } = this.props;
    const { MeetupCreateRequest } = this.props;

    const storage = JSON.parse(sessionStorage.getItem("@meetapp:user"));

    MeetupCreateRequest(
      title,
      description,
      file,
      when,
      location,
      storage.token
    );
  };

  render() {
    return (
      <div>
        <Header />
        <FormContainer>
          {/* <img src={logomeetapp} alt="Meetapp" /> */}
          <Form onSubmit={this.handleSubmit} encType="multipart/form-data">
            <FileUpload ref="fileRef" />

            {/* <Text>Titulo</Text> */}
            <Input
              value={this.state.title}
              onChange={this.handleTitle}
              placeholder="Defina o título"
              className="textinput"
            />

            {/* <Text>Descrição</Text> */}
            <TextArea
              rows="4"
              maxLength="500"
              value={this.state.description}
              onChange={this.handleDescription}
              type="textinput"
              placeholder="Descreva seu meetup"
              className="textinput"
              style={{ height: "150px" }}
            />

            {/* <Text>Data</Text> */}
            <DatePick
              selected={this.state.when}
              onChange={this.handleDate}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              minDate={new Date()}
              dateFormat="MMMM d, yyyy h:mm aa"
              timeCaption="time"
              placeholderText="Selecione uma data"
              className="textinput"
            />

            {/* <Text>Local</Text> */}
            <Input
              value={this.state.location}
              onChange={this.handleLocation}
              type="textinput"
              placeholder="Onde acontecerá o Meetup?"
              className="textinput"
            />
            <Button onClick={this.handleSubmit}>Continuar</Button>
          </Form>
        </FormContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.meetup.error,
  data: state.meetup.data,
  errorMessage: state.meetup.errorMessage,
  token: state.user.data.token,
  file: state.meetup.file
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...MeetupActions, ...UserActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMeetup);
