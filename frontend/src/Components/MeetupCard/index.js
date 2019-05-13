import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Container, Content, Title, InfoMembers } from "./styles";

class MeetupCard extends Component {
  static defaultProps = {
    fileUrl: ""
  };

  static propTypes = {
    id: PropTypes.number.isRequired,
    fileUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    numMembers: PropTypes.number.isRequired
  };

  getMembers = numMembers => {
    return `${numMembers} membro(s)`;
  };

  render() {
    const { id, fileUrl, title, numMembers } = this.props;
    return (
      <Fragment>
        <Container>
          <img src={fileUrl} alt="Meetup thumbnail" />
          <Content>
            <div>
              <Title>{title}</Title>
              <InfoMembers>{this.getMembers(numMembers)} </InfoMembers>
            </div>
            <Link to={`/meetupDetail/${id}`}>
              <button type="button">
                <i className="fa fa-chevron-right" />
              </button>
            </Link>
          </Content>
        </Container>
      </Fragment>
    );
  }
}

export default MeetupCard;
