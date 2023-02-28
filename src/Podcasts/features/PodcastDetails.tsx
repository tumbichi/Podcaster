import React, { useMemo } from "react";
import Head from "next/head";

import usePodcastById from "../repositories/PodcastsRepository/hooks/usePodcastById";

import PodcastDetailLayout from "../layouts/PodcastDetailLayout/PodcastDetailLayout";

import PodcastCardDetailed from "../components/PodcastCardDetailed/PodcastCardDetailed";
import PodcastEpisodesCount from "../components/PodcastEpisodesCount/PodcastEpisodesCount";
import EpisodesTable from "../components/EpisodesTable/EpisodesTable";
import formatDuration from "../formatters/formatDuration";

interface PodcastDetailsProps {
  podcastId: string;
  navigateToEpisodeDetails: (episodeId: string) => void;
}

const PodcastDetails = ({ podcastId, navigateToEpisodeDetails }: PodcastDetailsProps) => {
  const { podcast, isLoading } = usePodcastById(podcastId);

  const episodes = useMemo(() => {
    return !podcast
      ? []
      : podcast.channel.item.map((episode) => {
          return {
            title: episode.title[0],
            date: new Date(episode.pubDate[0]).toLocaleDateString("es-ES"),
            duration: episode["itunes:duration"] ? formatDuration(episode["itunes:duration"][0]) : "(empty)",
            onClick: () => {
              const guid = typeof episode.guid[0] === "object" ? episode.guid[0]._ : episode.guid[0];

              navigateToEpisodeDetails(guid);
            },
          };
        });
  }, [navigateToEpisodeDetails, podcast]);

  if (!podcast) return null;

  return (
    <>
      <Head>
        <title>{podcast.collectionName} - Podcaster </title>
        <meta name="description" content="podcasts player" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PodcastDetailLayout isLoading={isLoading}>
        {{
          aside: (
            <PodcastCardDetailed
              description={podcast.channel.description[0]}
              title={podcast.collectionName}
              author={podcast.artistName}
              imageUrl={podcast.artworkUrl600}
            />
          ),
          header: <PodcastEpisodesCount count={podcast.trackCount} />,
          content: <EpisodesTable episodes={episodes} />,
        }}
      </PodcastDetailLayout>
    </>
  );
};

export default PodcastDetails;
