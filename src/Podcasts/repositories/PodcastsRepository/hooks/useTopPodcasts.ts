import useSWR from "swr";
// import httpClient from "../httpClient";
import topPodcatsRepository from "..";
import Podcast from "../types/Podcast";
import { useEffect } from "react";
import useLoadingMethods from "@/Core/contexts/LoadingContext/hooks/useLoadingMethods";

const useTopPodcasts = () => {
  const { showLoading, hideLoading } = useLoadingMethods();
  const { data, error, isLoading } = useSWR(
    "top-podcasts",
    (): Promise<Podcast[]> => topPodcatsRepository.fetchPodcastsWithLimitOf(),
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
    podcasts: data ?? [],
    error,
    isLoading,
  };
};

export default useTopPodcasts;
