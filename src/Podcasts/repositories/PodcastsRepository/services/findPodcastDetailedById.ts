import httpClient from "../httpClient";
import PodcastDetailed from "../types/PodcastDetailed";
import PodcastDetailedWithChannel from "../types/PodcastDetailedWithChannel";
import fetchPodcastFeed from "./fetchPodcastFeed";

export interface GetPodcastByIDResponse {
  resultCount: number;
  results: PodcastDetailed[];
}

const findPodcastDetailedById = async (id: string): Promise<PodcastDetailedWithChannel> => {
  try {
    if (!id) throw new Error("The podcastId must be defined");

    const response = await httpClient.get<GetPodcastByIDResponse>(
      `${process.env.NEXT_PUBLIC_CORS_URL}/${process.env.NEXT_PUBLIC_API_URL}/lookup?id=${id}`
    );

    const channel = await fetchPodcastFeed(response.data.results[0].feedUrl);

    return { ...response.data.results[0], channel };
  } catch (error) {
    const errorMessage = "Failed when find podcast by id";

    console.error(`[PodcastsRepository] ${errorMessage}`, error);

    throw new Error(errorMessage);
  }
};



export default findPodcastDetailedById;
