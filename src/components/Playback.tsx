import { Box, Card, CardMedia, Hidden, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

export const Playback = () => {
  const params = useParams();
  const videoUrl = "https://www.youtube.com/watch?v=" + params.id;
  console.log(params.id, videoUrl);

  return (
    <Box sx={{height: 700, width: 1000, margin: 5}}>
          <ReactPlayer height={540} width={960} url={videoUrl} controls />
          <Typography p={2} variant="h5">Build and Deploy a Modern YouTube Clone Application in React JS with Material UI 5 | RapidAPI</Typography>
    </Box>
  );
};
