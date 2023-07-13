import { Box, Card, CardMedia, Hidden, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { Video } from "../interfaces/videos";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavigationBar } from "./Navbar";

export interface PlaybackVideo {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
}

export interface Snippet {
  publishedAt: Date;
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

const vid = {
  kind: "youtube#video",
  etag: "2YuhXFN7emeCoQfQUAGwgrxeCxA",
  id: "FHTbsZEJspU",
  snippet: {
    publishedAt: "2022-08-26T12:02:28Z",
    channelId: "UCmXmlB4-HJytD7wek0Uo97A",
    title:
      "Build and Deploy a Modern YouTube Clone Application in React JS with Material UI 5 | RapidAPI",
    description:
      "Master modern web development by building a responsive React JS application consisting of stunning video sections, custom categories, channel pages, and, most importantly, you can play videos straight from your YouTube Clone App!\n\n⭐RapidAPI Extension - https://marketplace.visualstudio.com/items?itemName=RapidAPI.vscode-rapidapi-client&utm_source=youtube.com%2FJavaScriptMastery&utm_medium=referral&utm_campaign=DevRel\n⭐RapidAPI YouTube v3 - https://rapidapi.com/ytdlfree/api/youtube-v31?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=referral&utm_campaign=DevRel\n⭐RapidAPI - https://rapidapi.com/?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=referral&utm_campaign=DevRel\n\n📙 Get the ultimate free resources, guides, and eBooks: https://www.jsmastery.pro/resources\n\nShowcase your dev skills with practical experience and land the coding career of your dreams:\n💻 JS Mastery Pro - https://jsmastery.pro/youtube\n✅ A unique YOUTUBE discount code is automatically applied!\n\n📚 Materials/References:\nGitHub Code (give it a star ⭐): https://github.com/adrianhajdin/project_youtube_clone\nGitHub Gist Code Snippets: https://gist.github.com/adrianhajdin/9725da94fa1f08c9668d856d3c94dd47\nHosting - http://hostinger.com/javascriptmastery\n\nReact.js, Material UI, and just a couple of other dependencies, you'll build everything else from scratch!\r\n\nIn this course, you'll learn:\n- React functional components and their reusability\n- React file and folder structure\n- You'll achieve mastery using Material UI (version 5)\n- Perfectly placed media queries for satisfactory responsiveness on all devices\n- And most importantly, fetching data from unlimited sources using RapidAPI.\n\n💻 Join JSM on Discord - https://discord.gg/n6EdbFJ\n🐦 Follow JSM on Twitter - https://twitter.com/jsmasterypro\n🖼️ Follow JSM Instagram - https://instagram.com/javascriptmastery\n\n💼 Business Inquiries: contact@jsmastery.pro\n\n👇 Time Stamps\n00:14:55 - Layout\n00:24:25 - Navbar\n00:36:06 - Feed & Sidebar\n00:50:02 - API Data fetching\n01:04:00 - Videos\n01:31:07 - Profile page\n01:51:30 - Search\n01:57:29 - Video Details\n02:17:30 - Deployment",
    thumbnails: {
      default: {
        url: "https://i.ytimg.com/vi/FHTbsZEJspU/default.jpg",
        width: 120,
        height: 90,
      },
      medium: {
        url: "https://i.ytimg.com/vi/FHTbsZEJspU/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      high: {
        url: "https://i.ytimg.com/vi/FHTbsZEJspU/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      standard: {
        url: "https://i.ytimg.com/vi/FHTbsZEJspU/sddefault.jpg",
        width: 640,
        height: 480,
      },
      maxres: {
        url: "https://i.ytimg.com/vi/FHTbsZEJspU/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
    },
    channelTitle: "JavaScript Mastery",
    tags: [
      "javascript",
      "javascript mastery",
      "js mastery",
      "master javascript",
      "react youtube clone",
      "youtube clone react",
      "material ui react",
      "material ui react tutorial",
      "material ui tutorial",
      "material ui v5 tutorial",
      "material ui v5 project",
      "rapidapi",
      "rapid api tutorial",
      "rapid api react",
      "react api project",
      "build a youtube clone application using react",
      "react application project",
      "react application project from scratch",
      "youtube clone app",
    ],
    categoryId: "27",
    liveBroadcastContent: "none",
    defaultLanguage: "en",
    localized: {
      title:
        "Build and Deploy a Modern YouTube Clone Application in React JS with Material UI 5 | RapidAPI",
      description:
        "Master modern web development by building a responsive React JS application consisting of stunning video sections, custom categories, channel pages, and, most importantly, you can play videos straight from your YouTube Clone App!\n\n⭐RapidAPI Extension - https://marketplace.visualstudio.com/items?itemName=RapidAPI.vscode-rapidapi-client&utm_source=youtube.com%2FJavaScriptMastery&utm_medium=referral&utm_campaign=DevRel\n⭐RapidAPI YouTube v3 - https://rapidapi.com/ytdlfree/api/youtube-v31?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=referral&utm_campaign=DevRel\n⭐RapidAPI - https://rapidapi.com/?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=referral&utm_campaign=DevRel\n\n📙 Get the ultimate free resources, guides, and eBooks: https://www.jsmastery.pro/resources\n\nShowcase your dev skills with practical experience and land the coding career of your dreams:\n💻 JS Mastery Pro - https://jsmastery.pro/youtube\n✅ A unique YOUTUBE discount code is automatically applied!\n\n📚 Materials/References:\nGitHub Code (give it a star ⭐): https://github.com/adrianhajdin/project_youtube_clone\nGitHub Gist Code Snippets: https://gist.github.com/adrianhajdin/9725da94fa1f08c9668d856d3c94dd47\nHosting - http://hostinger.com/javascriptmastery\n\nReact.js, Material UI, and just a couple of other dependencies, you'll build everything else from scratch!\r\n\nIn this course, you'll learn:\n- React functional components and their reusability\n- React file and folder structure\n- You'll achieve mastery using Material UI (version 5)\n- Perfectly placed media queries for satisfactory responsiveness on all devices\n- And most importantly, fetching data from unlimited sources using RapidAPI.\n\n💻 Join JSM on Discord - https://discord.gg/n6EdbFJ\n🐦 Follow JSM on Twitter - https://twitter.com/jsmasterypro\n🖼️ Follow JSM Instagram - https://instagram.com/javascriptmastery\n\n💼 Business Inquiries: contact@jsmastery.pro\n\n👇 Time Stamps\n00:14:55 - Layout\n00:24:25 - Navbar\n00:36:06 - Feed & Sidebar\n00:50:02 - API Data fetching\n01:04:00 - Videos\n01:31:07 - Profile page\n01:51:30 - Search\n01:57:29 - Video Details\n02:17:30 - Deployment",
    },
    defaultAudioLanguage: "en",
  },
};

export const Playback = () => {
  const [playbackVideo, setPlaybackVideo] = useState<PlaybackVideo>();
  const params = useParams();
  const videoUrl = "https://www.youtube.com/watch?v=" + params.id;
  //   console.log(params.id, videoUrl);

  useEffect(() => {
    const fetchVideoDetails = async () =>
      await axios
        .get("https://www.googleapis.com/youtube/v3/videos", {
          params: {
            key: process.env.REACT_APP_YOUTUBE_API_KEY,
            part: "snippet",
            id: params.id,
          },
        })
        .then((response: any) => {
          console.log(response.data.items[0]);
          setPlaybackVideo(response.data.items[0]);
        })
        .catch((error: any) => {
          console.log(error);
        });
    fetchVideoDetails();
  }, []);

  const handleSubmit = (query: string) => {};

  return (
    <>
      <NavigationBar handleSubmit={handleSubmit} />
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box sx={{ height: 700, width: 1000, margin: 5, marginLeft: 10 }}>
          <ReactPlayer height={540} width={960} url={videoUrl} controls />
          <Typography mt={2} variant="h5">
            {playbackVideo?.snippet.title}
          </Typography>
          <Typography mt={2}>
            <b>{playbackVideo?.snippet.channelTitle}</b>
          </Typography>
          <Typography variant="subtitle1">
            {playbackVideo?.snippet.description}
          </Typography>
          <p>{playbackVideo?.snippet.description}</p>
        </Box>
      </Stack>
    </>
  );
};
