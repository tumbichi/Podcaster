import ITopPodcatsRepository from "./types/TopPodcatsRepository";
import fetchPodcastsWithLimitOf from "./services/fetchPodcastsWithLimitOf";
import findPodcastDetailedById from "./services/findPodcastDetailedById";

const TopPodcatsRepository: ITopPodcatsRepository = {
  fetchPodcastsWithLimitOf,
  findPodcastDetailedById,
};

export default TopPodcatsRepository;
