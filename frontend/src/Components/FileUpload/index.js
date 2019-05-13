import React, { Component } from "react";
import { Img, Container } from "./styles";
import api from "../../services/api";

class FileUpload extends Component {
  state = {
    file: "",
    imagePreviewUrl: "",
    error: "",
    fileName: ""
  };

  getState() {
    return this.state;
  };

  handleUpload = e => {
    e.preventDefault();

    console.log("handle upload: ", this.state.file);
  };

  getPreview = async e => {
    const reader = new FileReader();
    const file = e.target.files[0];

    const formFile = new FormData();
    await formFile.append("file", file);
    const config = {
      headers: { "content-type": "multipart/form-data" }
    };

    try {
      const { data } = await api.post("/files", formFile, config);
      this.setState({ fileName: data.file });
      console.log(this.state.fileName);
    } catch (err) {
      this.setState({ error: "Erro ao subir arquivo" });
    }

    reader.onloadend = () => {
      this.setState({
        file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  };

  render() {
    const { imagePreviewUrl } = this.state;
    let imagePreview = null;
    if (imagePreviewUrl) {
      imagePreview = <Img src={imagePreviewUrl} alt="imagem" />;
    } else {
      imagePreview = <div className="previewText">Selecione uma imagem</div>;
    }

    const { error } = this.state;
    return (
      <Container>
        {error !== "" && <p>{error}</p>}
        <input type="file" onChange={this.getPreview} />
        <div className="imgPreview">{imagePreview}</div>
      </Container>
    );
  }
}

export default FileUpload;
