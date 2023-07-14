import { useEffect, useState } from "react"
import { PlaybackVideo } from "./Playback"
import axios from "axios";
import { Box, Card, CardMedia, Typography } from "@mui/material";



export const RelatedVideos = ({videoId}:any) => {
    const [relatedVideos, setRelatedVideos] = useState<PlaybackVideo[]>([]);
    useEffect(() => {
        const fetchRelatedVideos = async () =>
          await axios
            .get("https://www.googleapis.com/youtube/v3/search", {
              params: {
                key: process.env.REACT_APP_YOUTUBE_API_KEY,
                part: "snippet",
                relatedToVideoId: videoId,
                maxResults: 25,
                type: "video"
                // id: videoId,
              },
            })
            .then((response: any) => {
              console.log(response.data.items);
              setRelatedVideos(response.data.items);
            })
            .catch((error: any) => {
              console.log(error);
            });
        fetchRelatedVideos();
      }, [videoId]);
    return (
        <Box sx={{m: "30px"}}>
        <Typography variant="h6">
            Similar Videos
        </Typography>
        {relatedVideos.map((video: PlaybackVideo) => (
            <Card key={video.etag} sx={ {  padding:"16px",
            marginTop: "30px",
            backgroundColor: "#000",
            color: "#FFF",
            cursor:"pointer",
            "&hover:":{
                cursor:"pointer",
            }
        } } 
        >
                <CardMedia
                  component="img"
                  alt={video.snippet.thumbnails.high.url}
                  height="200" // Increase the height value for clearer thumbnails
                  image={video.snippet.thumbnails.high.url}
                  // imageFit="cover" // Apply cover scaling to maintain aspect ratio
                  />
                <Typography variant="subtitle1" fontWeight="bold">
                  {video.snippet.title}
                </Typography>
                <Typography variant="body2">{video.snippet.channelTitle}</Typography>
              </Card>
          ))}
          </Box>

    )
}