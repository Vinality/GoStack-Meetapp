import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import moment from 'moment/min/moment-with-locales';

import { Container, Text, Date } from './styles';

const MeetupSub = ({ title, when, id }) => {
  const linkTo = `/meetupDetail/${id}`;

  return (
    <Link to={linkTo} style={{ textDecoration: 'none' }}>
      <Container>
        <Text>{title}</Text>
        <Date>{moment(when).format('D [de] MMMM [de] YYYY')}</Date>
        <FontAwesomeIcon icon={faChevronRight} color="#e5556e" />
      </Container>
    </Link>
  );
};

export default MeetupSub;
