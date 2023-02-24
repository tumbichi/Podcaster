import Podcast from "./Podcast";

export default interface TopPodcatsRepository {
  fetchPodcastsWithLimitOf: (limit?: number, genre?: number) => Promise<Podcast[]>;
}
