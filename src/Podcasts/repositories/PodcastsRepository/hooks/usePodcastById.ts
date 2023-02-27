import useSWR from "swr";
import topPodcatsRepository from "..";
import PodcastDetailedWithChannel from "../types/PodcastDetailedWithChannel";

const usePodcastById = (id: string) => {
  const { data, error, isLoading, isValidating } = useSWR(
    `podcast-detailed-${id}`,
    (): Promise<PodcastDetailedWithChannel> => topPodcatsRepository.findPodcastDetailedById(id),
    {
      revalidateOnMount: true,
      refreshInterval: 24 * 60 * 60 * 1000,
    }
  );

  return {
    podcast: data,
    error,
    isLoading,
  };
};

export default usePodcastById;
