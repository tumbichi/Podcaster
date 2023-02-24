import React from "react";
import useTopPodcasts from "../repositories/TopPodcastsRepository/hooks/useTopPodcasts";
import PodcastCard from "../components/PodcastCard/PodcastCard";
import PodcastsListLayout from "../layouts/PodcastsList/PodcastsList";

const TopPodcasts = () => {
  const { podcasts, error, isLoading } = useTopPodcasts();

  return (
    <div>
      <PodcastsListLayout>
        {podcasts.map((podcast) => (
          <PodcastCard
            key={podcast.id.label}
            title={podcast["im:name"].label}
            author={podcast["im:artist"].label}
            imageUrl={podcast["im:image"][2].label}
          />
        ))}
      </PodcastsListLayout>
    </div>
  );
};

export default TopPodcasts;
