import React from "react";
import Head from "next/head";
import useEpisodeDetails from "../repositories/PodcastsRepository/hooks/useEpisodeDetails";
import PodcastDetailLayout from "../layouts/PodcastDetailLayout/PodcastDetailLayout";
import PodcastCardDetailed from "../components/PodcastCardDetailed/PodcastCardDetailed";
import EpisodeDetail from "../components/EpisodeDetail/EpisodeDetail";

interface PodcastEpisodeDetailsProps {
  episodeId: string;
  podcastId: string;
  navigateToPodcastDetails: (podcastId: string) => void;
}

const PodcastEpisodeDetails = ({ episodeId, podcastId, navigateToPodcastDetails }: PodcastEpisodeDetailsProps) => {
  const { episode, podcast, isLoading } = useEpisodeDetails(podcastId, episodeId);

  return (
    <>
      <Head>
        <title>
          {episode?.title[0]} ({podcast?.collectionName}) - Podcaster{" "}
        </title>
        <meta name="description" content="podcasts player" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PodcastDetailLayout isLoading={isLoading}>
        {{
          aside: (
            <PodcastCardDetailed
              description={String(podcast?.channel.description[0])}
              title={String(podcast?.collectionName)}
              author={String(podcast?.artistName)}
              imageUrl={String(podcast?.artworkUrl600)}
              goToPodcastDetails={() => navigateToPodcastDetails(podcastId)}
            />
          ),
          header: null,
          content: (
            <EpisodeDetail
              title={String(episode?.title[0])}
              description={String(episode?.description[0])}
              episodeUrl={String(episode?.enclosure[0].$.url)}
            />
          ),
        }}
      </PodcastDetailLayout>
    </>
  );
};

export default PodcastEpisodeDetails;
