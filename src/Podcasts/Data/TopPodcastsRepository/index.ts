import { Feed } from "./types/Feed";
import ITopPodcatsRepository from "./types/TopPodcatsRepository";
import fetchPodcastsWithLimitOf from "./services/fetchPodcastsWithLimitOf";

const TopPodcatsRepository: ITopPodcatsRepository = {
  fetchPodcastsWithLimitOf,
};

export default TopPodcatsRepository;
