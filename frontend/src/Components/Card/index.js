import React from 'react';
import { MyCard } from './styles';
import { Link } from 'react-router-dom';
import { CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'

const ImgMediaCard = ({ url, title, description, id }) => {
  const linkTo = `/meetupDetail/${id}`;
  return (
    <Link to={linkTo} style={{ textDecoration: 'none' }}>
      <MyCard>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={url}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="secondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </MyCard>
    </Link >
  );
}

export default ImgMediaCard