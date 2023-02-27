import useSWR from "swr";
// import httpClient from "../httpClient";
import topPodcatsRepository from "..";
import Podcast from "../types/Podcast";

const useTopPodcasts = () => {
  const { data, error, isLoading } = useSWR(
    "top-podcasts",
    (): Promise<Podcast[]> => topPodcatsRepository.fetchPodcastsWithLimitOf(),
    {
      revalidateOnMount: true,
      refreshInterval: 24 * 60 * 60 * 1000,
    }
  );

  return {
    podcasts: data ?? [],
    error,
    isLoading,
  };
};

export default useTopPodcasts;
