import { Box, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import axios from "axios";
import { Comments } from "./Comments";
import { RelatedVideos } from "./RelatedVideos";

export interface PlaybackVideo {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
}

export interface Snippet {
  publishedAt: Date | undefined;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage: string;
  localized: Localized;
  defaultAudioLanguage: string;
}

export interface Localized {
  title: string;
  description: string;
}

export interface Thumbnails {
  default: Default;
  medium: Default;
  high: Default;
  standard: Default;
  maxres: Default;
}

export interface Default {
  url: string;
  width: number;
  height: number;
}

export const Playback = ({ videoId }: any) => {
  const [playbackVideo, setPlaybackVideo] = useState<PlaybackVideo>();
  const [videoID, setVideoID] = useState<string>(videoId);
  const videoUrl = "https://www.youtube.com/watch?v=" + videoID;

  useEffect(() => {
    const fetchVideoDetails = async () =>
      await axios
        .get("https://www.googleapis.com/youtube/v3/videos", {
          params: {
            key: process.env.REACT_APP_YOUTUBE_API_KEY,
            part: "snippet",
            id: videoID,
          },
        })
        .then((response: any) => {
          console.log(response.data.items[0]);
          setPlaybackVideo(response.data.items[0]);
          document.title = playbackVideo?.snippet.title || "YouTube";
        })
        .catch((error: any) => {
          console.log(error);
        });
    fetchVideoDetails();
  }, [videoID]);

  const handleClick = (id: any) => {
    console.log(id);
    setVideoID(id?.videoId || id);
  };

  console.log(playbackVideo?.snippet.publishedAt);

  return (
    <>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box sx={{ height: 700, width: 1000, margin: 5, marginLeft: 10 }}>
          <ReactPlayer height={540} width={960} url={videoUrl} controls />
          <Typography mt={2} variant="h4">
            {playbackVideo?.snippet.title}
          </Typography>
          <Typography mt={2}>
            <b>{playbackVideo?.snippet.channelTitle}</b>
          </Typography>

          {playbackVideo?.snippet.description.split("\n").map((line) => (

            <Typography mt={2} variant="subtitle1" key={line}>
              {line}
            </Typography>
          ))}
          <Comments videoId={videoID} />
        </Box>
        <RelatedVideos handleClick={handleClick} videoId={videoID} />
      </Stack>
    </>
  );
};
