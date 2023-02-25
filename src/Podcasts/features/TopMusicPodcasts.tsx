import React from "react";

import { Badge, InputText } from "@/Core/components";
import PodcastsListLayout from "../layouts/PodcastsList/PodcastsList";
import FiltersLayout from "../layouts/FilterLayout/FiltersLayout";
import { PodcastCard } from "../components";

import useTopPodcasts from "../repositories/TopPodcastsRepository/hooks/useTopPodcasts";

import useSearchFilter from "../hooks/useSearchFilter";

const TopPodcasts = () => {
  const { podcasts, error, isLoading } = useTopPodcasts();
  const { filteredPodcasts, onChangeQuery } = useSearchFilter(podcasts);

  const handleSearch = (newQuery: string) => {
    onChangeQuery(newQuery);
  };

  return (
    <>
      <FiltersLayout>
        <Badge>{filteredPodcasts.length}</Badge>
        <InputText placeholder="Filter podcasts..." onChange={handleSearch} />
      </FiltersLayout>
      <PodcastsListLayout>
        {filteredPodcasts.map((podcast) => (
          <PodcastCard
            key={podcast.id.label}
            title={podcast["im:name"].label.toUpperCase()}
            author={podcast["im:artist"].label}
            imageUrl={podcast["im:image"][2].label}
          />
        ))}
      </PodcastsListLayout>
    </>
  );
};

export default TopPodcasts;
