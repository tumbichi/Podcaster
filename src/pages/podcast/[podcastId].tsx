import React, { useCallback } from "react";
import { useRouter } from "next/router";
import PodcastDetails from "@/Podcasts/features/PodcastDetails";

const PodcastDetailsPage = () => {
  const router = useRouter();

  const navigateToEpisodeDetails = useCallback(
    (episodeId: string) => {
      const encodedEpisodeId = encodeURIComponent(episodeId);

      router.push(
        {
          pathname: "/podcast/[podcastId]/episode/[episodeId]",
          query: {
            podcastId: router.query.podcastId,
            episodeId: encodedEpisodeId,
          },
        },
        `/podcast/${router.query.podcastId}/episode/${encodedEpisodeId}`,
        { shallow: true }
      );
    },
    [router]
  );

  if (router.query.podcastId === undefined) return null;

  return (
    <PodcastDetails podcastId={String(router.query.podcastId)} navigateToEpisodeDetails={navigateToEpisodeDetails} />
  );
};

export default PodcastDetailsPage;
