import PodcastEpisodeDetails from "@/Podcasts/features/PodcastEpisodeDetails";
import { useRouter } from "next/router";
import React, { useCallback } from "react";

const PodcastEpisodeDetailsPage = () => {
  const router = useRouter();

  const navigateToPodcastDetails = useCallback(
    (podcastId: string) => {
      router.push(
        {
          pathname: "/podcast/[podcastId]",
          query: {
            podcastId,
          },
        },
        `/podcast/${podcastId}`,
        { shallow: true }
      );
    },
    [router]
  );

  if (router.query.episodeId === undefined || router.query.podcastId === undefined) return null;

  return (
    <PodcastEpisodeDetails
      episodeId={String(router.query.episodeId)}
      podcastId={String(router.query.podcastId)}
      navigateToPodcastDetails={navigateToPodcastDetails}
    />
  );
};

export default PodcastEpisodeDetailsPage;
