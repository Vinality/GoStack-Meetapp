import React from 'react';
import { MyCard } from './styles';
import { CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'

const ImgMediaCard = ({ url, title, description }) => {

  return (
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
  );
}

export default ImgMediaCard