import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

function AnimeCard(props) {
  return (
    <article>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Box sx={{ bgcolor: 'secondary.main' }}>
            <Typography
              sx={{ fontSize: 28 }}
              color='text.secondary'
              gutterBottom
            >
              {props.anime.title}
            </Typography>
          </Box>

          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            <img
              src={props.anime.images.jpg.image_url}
              alt='jikan api images'
            />
          </Typography>

          <Box>
            <Typography sx={{ fontSize: 18 }}>
              {props.anime.synopsis}
            </Typography>
            <br />
            <Typography pr={2} style={{ display: 'inline-block' }}>
              Episodes: {props.anime.episodes}
            </Typography>
            <Typography pr={2} style={{ display: 'inline-block' }}>
              Type: {props.anime.type}
            </Typography>
            <Typography pr={2} style={{ display: 'inline-block' }}>
              Duration: {props.anime.duration}
            </Typography>
            <Typography pr={2} style={{ display: 'inline-block' }}>
              Score: {props.anime.score}
            </Typography>
            <Typography pr={2} style={{ display: 'inline-block' }}>
              Year: {props.anime.year ? props.anime.year : 'N/A'}
            </Typography>
            <Typography pr={2} style={{ display: 'inline-block' }}>
              Rating: {props.anime.rating}
            </Typography>
            <Typography pr={2} style={{ display: 'inline-block' }}>
              Genre:{' '}
              {props.anime.genres.map((ele) => {
                return `${ele.name}, `;
              })}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button size='medium'>
            <a href={props.anime.url} target='_blank' rel='noreferrer'>
              Learn More
            </a>
          </Button>
        </CardActions>
      </Card>
    </article>
  );
}

export default AnimeCard;
