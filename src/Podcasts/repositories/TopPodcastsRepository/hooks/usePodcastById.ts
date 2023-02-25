import { useMemo } from "react";
import useTopPodcasts from "./useTopPodcasts";

const usePodcastById = (id: string) => {
  const { podcasts, error, isLoading } = useTopPodcasts();

  const podcastSelected = useMemo(
    () => podcasts.find((podcast) => podcast.id.attributes["im:id"] === id),
    [id, podcasts]
  );

  return {
    podcast: podcastSelected,
    error,
    isLoading,
  };
};

export default usePodcastById;
