import Podcast from "./Podcast";
import PodcastDetailedWithChannel from "./PodcastDetailedWithChannel";

export default interface TopPodcatsRepository {
  fetchPodcastsWithLimitOf: (limit?: number, genre?: number) => Promise<Podcast[]>;
  findPodcastDetailedById: (podcastId: string) => Promise<PodcastDetailedWithChannel>;
}
