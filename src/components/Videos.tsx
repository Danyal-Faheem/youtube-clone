import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { Video } from "../interfaces/videos";

interface VideoProps {
  videos: Video[];
  handleVideoClick: (clickedVideo: Video) => void;
}

export const Videos = ({ videos, handleVideoClick }: VideoProps) => {
  return (
    <Grid container spacing={3}>
      {videos.map((video: Video) => (
        <Grid item xs={12} sm={6} md={4} key={video.etag}>
          <Card
            sx={{
              padding: "16px",
              cursor: "pointer",
              margin: "2px",
              backgroundColor: "#000",
              color: "#FFF",
              "&hover:": {
                cursor: "pointer",
              },
            }}
            onClick={() => handleVideoClick(video)}
          >
            <CardMedia
              component="img"
              alt={video.snippet.title}
              height="300" // Increase the height value for clearer thumbnails
              image={video.snippet.thumbnails.high.url}
            />
            <Typography variant="subtitle1" fontWeight="bold">
              {video.snippet.title}
            </Typography>
            <Typography variant="body2">
              {video.snippet.channelTitle}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
