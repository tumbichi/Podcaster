import React, { useCallback } from "react";

import { Badge, InputText } from "@/Core/components";
import PodcastsListLayout from "../layouts/PodcastsList/PodcastsList";
import FiltersLayout from "../layouts/FilterLayout/FiltersLayout";
import { PodcastCard } from "../components";

import useTopPodcasts from "../repositories/PodcastsRepository/hooks/useTopPodcasts";

import useSearchFilter from "../hooks/useSearchFilter";
import Podcast from "../repositories/PodcastsRepository/types/Podcast";

interface TopPodcastsProps {
  navigateToPodcastDetails: (podcastId: string) => void;
}

const TopPodcasts = ({ navigateToPodcastDetails }: TopPodcastsProps) => {
  const { podcasts } = useTopPodcasts();
  const { filteredPodcasts, onChangeQuery } = useSearchFilter(podcasts);

  const handleSearch = (newQuery: string) => {
    onChangeQuery(newQuery);
  };

  const handleClickPodcastCard = useCallback(
    (podcast: Podcast) => navigateToPodcastDetails(podcast.id.attributes["im:id"]),
    [navigateToPodcastDetails]
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
