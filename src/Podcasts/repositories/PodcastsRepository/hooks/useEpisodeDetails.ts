import { useEffect, useMemo } from "react";
import usePodcastById from "./usePodcastById";
import PodcastDetailedWithChannel from "../types/PodcastDetailedWithChannel";
import { Item } from "../types/FeedPodcastParsed";
import useLoadingMethods from "@/Core/contexts/LoadingContext/hooks/useLoadingMethods";

interface UseEpisodeDetailsReturn {
  isLoading: boolean;
  podcast?: PodcastDetailedWithChannel;
  episode?: Item;
}

const useEpisodeDetails = (podcastId: string, episodeId: string): UseEpisodeDetailsReturn => {
  const { showLoading, hideLoading } = useLoadingMethods();
  const { podcast, isLoading } = usePodcastById(podcastId);
  const episode = useMemo(() => {
    return podcast?.channel.item.find((episode) => {
      if (typeof episode.guid[0] === "object") {
        return episode.guid[0]._ === episodeId;
      } else {
        return episode.guid[0] === episodeId;
      }
    });
  }, [episodeId, podcast?.channel.item]);

  useEffect(() => {
    if (isLoading) {
      showLoading();
    } else {
      hideLoading();
    }
  }, [hideLoading, isLoading, showLoading]);

  return {
    isLoading,
    podcast,
    episode,
  };
};

export default useEpisodeDetails;
