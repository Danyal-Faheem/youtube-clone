import { Card, CardMedia, Grid } from "@mui/material";
import { Video } from "../interfaces/videos";

interface video {
  videos: Video[];
}

export const Videos = ({ videos }: video) => {
  return (
    <>
      {/* Display grid of videos here that are passed as a prop */}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {videos.map((vid: Video) => {
          return (
            <Grid item xs={2} sm={4} md={4} key={vid.etag}>
              <Card>
                <CardMedia
                  sx={{ height: 140 }}
                  image={vid.snippet.thumbnails.default.url}
                />
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
