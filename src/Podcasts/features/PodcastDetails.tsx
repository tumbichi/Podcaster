import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Card from "@/Core/components/Card/Card";
import { PodcastCard } from "../components";

import usePodcastById from "../repositories/TopPodcastsRepository/hooks/usePodcastById";
import PodcastCardDetailed from "../components/PodcastCardDetailed/PodcastCardDetailed";

const PodcastDetails = () => {
  const router = useRouter();
  const { podcast } = usePodcastById(String(router.query.id));

  if (!podcast) return;

  return (
    <div>
 
      <div style={{ display: "flex" }}>
        <PodcastCardDetailed
          description={podcast.summary.label}
          title={podcast["im:name"].label}
          author={podcast["im:artist"].label}
          imageUrl={podcast["im:image"][2].label}
        />
      </div>
    </div>
  );
};

export default PodcastDetails;
