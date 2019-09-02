import React, { Component } from "react";
import { DropContainer } from "./styles";
import Dropzone from "react-dropzone";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as MeetupActions } from "../../store/ducks/meetup";

class FileUpload extends Component {
  constructor() {
    super();
    this.onDrop = files => {
      this.setState({ files });
      const { UploadMeetupFile } = this.props;
      const file = this.state.files[0];

      UploadMeetupFile(file);
    };
    this.state = {
      files: [],
      fileName: ""
    };
  }

  render() {
    const files = this.state.files.map(file => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ));

    return (
      <div>
        <Dropzone onDrop={this.onDrop}>
          {({ getRootProps, getInputProps }) => (
            <DropContainer className="container">
              <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <p>Arraste um arquivo ou clique aqui para inserir uma imagem</p>
              </div>
              <aside>
                <h4>Arquivo:</h4>
                <ul>{files}</ul>
              </aside>
            </DropContainer>
          )}
        </Dropzone>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...MeetupActions }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(FileUpload);
