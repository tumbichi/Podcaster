import React, { useCallback } from "react";

import { Badge, InputText } from "@/Core/components";
import PodcastsListLayout from "../layouts/PodcastsList/PodcastsList";
import FiltersLayout from "../layouts/FilterLayout/FiltersLayout";
import { PodcastCard } from "../components";

import useTopPodcasts from "../repositories/TopPodcastsRepository/hooks/useTopPodcasts";

import useSearchFilter from "../hooks/useSearchFilter";
import Podcast from "../repositories/TopPodcastsRepository/types/Podcast";
import { useRouter } from "next/router";

const TopPodcasts = () => {
  const router = useRouter();
  const { podcasts, error, isLoading } = useTopPodcasts();
  const { filteredPodcasts, onChangeQuery } = useSearchFilter(podcasts);

  const handleSearch = (newQuery: string) => {
    onChangeQuery(newQuery);
  };

  const handleClickPodcastCard = useCallback(
    (podcast: Podcast) => {
      router.push(
        {
          pathname: "/podcast/[id]",
          query: {
            podcastId: podcast.id.attributes["im:id"],
          },
        },
        `/podcast/${podcast.id.attributes["im:id"]}`,
        { shallow: true }
      );
    },
    [router]
  );

  return (
    <>
      <FiltersLayout>
        <Badge>{filteredPodcasts.length}</Badge>
        <InputText placeholder="Filter podcasts..." onChange={handleSearch} />
      </FiltersLayout>
      <PodcastsListLayout>
        {filteredPodcasts.map((podcast) => (
          <PodcastCard
            key={podcast.id.attributes["im:id"]}
            title={podcast["im:name"].label.toUpperCase()}
            author={podcast["im:artist"].label}
            imageUrl={podcast["im:image"][2].label}
            onClick={() => handleClickPodcastCard(podcast)}
          />
        ))}
      </PodcastsListLayout>
    </>
  );
};

export default TopPodcasts;
