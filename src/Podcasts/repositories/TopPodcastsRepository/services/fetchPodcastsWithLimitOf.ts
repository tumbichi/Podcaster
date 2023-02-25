import httpClient from "../httpClient";
import { Feed } from "../types/Feed";
import Podcast from "../types/Podcast";

interface GetPodcastsResponseData {
  feed: Feed;
}

const MUSIC_GENRE_ID = 1310;

const fetchPodcastsWithLimitOf = async (limit = 100, genre = MUSIC_GENRE_ID): Promise<Podcast[]> => {
  try {
    const response = await httpClient.get<GetPodcastsResponseData>(`/limit=${limit}/genre=${genre}/json`);

    return response.data.feed.entry;
  } catch (error) {
    const errorMessage = "Failed when fetch podcasts";

    console.error(`[TopPodcastsRepository] ${errorMessage}`, error);

    throw new Error(errorMessage);
  }
};

export default fetchPodcastsWithLimitOf;
