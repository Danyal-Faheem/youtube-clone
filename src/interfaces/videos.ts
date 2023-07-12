export interface Video {
  kind: string;
  etag: string;
  id: ID;
  snippet: Snippet;
}

export interface ID {
  kind: string;
  channelId: string;
}

export interface Snippet {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: Date;
}

export interface Thumbnails {
  default: Default;
  medium: Default;
  high: Default;
}

export interface Default {
  url: string;
}
