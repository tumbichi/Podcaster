import xml2js from "xml2js";

import httpClient from "../httpClient";

import { Channel, FeedPodcastParsed } from "../types/FeedPodcastParsed";

const fetchPodcastFeed = async (feedUrl: string): Promise<Channel> => {
  const response = await httpClient.get(`${process.env.NEXT_PUBLIC_CORS_URL}/${feedUrl}`, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
  const parser = new xml2js.Parser();
  const result: FeedPodcastParsed = await parser.parseStringPromise(response.data);

  return result.rss.channel[0];
};

export default fetchPodcastFeed;
