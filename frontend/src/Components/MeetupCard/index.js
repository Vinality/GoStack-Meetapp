import React from 'react';

import { Container, Img, CardText } from './styles';

const MeetupCard = ({ title, date, file }) => (
  <Container>
    <Img src={file} alt="Foto" />
    <CardText>
      <p>{title}</p>
      <p>{date}</p>
    </CardText>
  </Container>
);

export default MeetupCard;
