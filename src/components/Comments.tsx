import { Box, Typography } from "@mui/material";
import axios from "axios";

import { useEffect, useState } from "react";

export interface Comment {
  kind: string;
  etag: string;
  id: string;
  snippet: CommentSnippet;
}

export interface CommentSnippet {
  videoId: string;
  topLevelComment: TopLevelComment;
  canReply: boolean;
  totalReplyCount: number;
  isPublic: boolean;
}

export interface TopLevelComment {
  kind: string;
  etag: string;
  id: string;
  snippet: TopLevelCommentSnippet;
}

export interface TopLevelCommentSnippet {
  videoId: string;
  textDisplay: string;
  textOriginal: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
  authorChannelUrl: string;
  authorChannelId: AuthorChannelID;
  canRate: boolean;
  viewerRating: string;
  likeCount: number;
  publishedAt: Date;
  updatedAt: Date;
}

export interface AuthorChannelID {
  value: string;
}

export const Comments = ({ videoId }: any) => {
  const [comments, setComments] = useState<Comment[]>([]);
  useEffect(() => {
    const fetchVideoComments = async () =>
      await axios
        .get("https://www.googleapis.com/youtube/v3/commentThreads", {
          params: {
            key: process.env.REACT_APP_YOUTUBE_API_KEY,
            part: "snippet",
            videoId: videoId,
            textFormat: "plainText",
            maxResults: 100,
          },
        })
        .then((response: any) => {
          console.log(response.data.items);
          setComments(response.data.items);
        })
        .catch((error: any) => {
          console.log(error);
        });
    fetchVideoComments();
  }, [videoId]);

  return (
    <>
      <Typography variant="h6" mt={3}>
        Comments
      </Typography>
      {comments?.map((comment: Comment) => {
        return (
          <Box key={comment.etag} mt={2}>
            <Typography mt={2}>
              <b>{comment.snippet.topLevelComment.snippet.authorDisplayName}</b>
            </Typography>
            <Typography mt={1} variant="subtitle2">
              {comment.snippet.topLevelComment.snippet.textDisplay}
            </Typography>
          </Box>
        );
      })}
    </>
  );
};

