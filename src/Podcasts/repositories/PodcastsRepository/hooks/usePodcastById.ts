import useSWR from "swr";
import topPodcatsRepository from "..";
import PodcastDetailedWithChannel from "../types/PodcastDetailedWithChannel";
import useLoadingMethods from "@/Core/contexts/LoadingContext/hooks/useLoadingMethods";
import { useEffect } from "react";

const usePodcastById = (id: string) => {
  const { showLoading, hideLoading } = useLoadingMethods();
  const { data, error, isLoading } = useSWR(
    `podcast-detailed-${id}`,
    (): Promise<PodcastDetailedWithChannel> => topPodcatsRepository.findPodcastDetailedById(id),
    {
      revalidateOnMount: true,
      refreshInterval: 24 * 60 * 60 * 1000,
    }
  );

  useEffect(() => {
    if (isLoading) {
      showLoading();
    } else {
      hideLoading();
    }
  }, [hideLoading, isLoading, showLoading]);

  return {
    podcast: data,
    error,
    isLoading,
  };
};

export default usePodcastById;
