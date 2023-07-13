import React from 'react';
import { Video } from '../interfaces/videos';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface Props {
  clickedVideo: Video | null;
}

const DisplayVideo = ({ clickedVideo }: Props) => {
  if (!clickedVideo) {
    return null; // Return null if clickedVideo is null
  }
console.log(clickedVideo.id.videoId);
     const videoId = clickedVideo.id.videoId;
   const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <Card>
      <CardMedia
        component="iframe"
        src={videoUrl}
        title={clickedVideo.snippet.title}
        height="400"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {clickedVideo.snippet.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {clickedVideo.snippet.channelTitle}
        </Typography>
        {/* Add any other desired video details */}
      </CardContent>
    </Card>
  );
};

export default DisplayVideo;
