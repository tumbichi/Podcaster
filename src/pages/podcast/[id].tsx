import PodcastDetails from "@/Podcasts/features/PodcastDetails";
import { useRouter } from "next/router";
import React from "react";

const PodcastDetailPage = () => {
  const router = useRouter();

  if (router.query.id === undefined) return null;

  return <PodcastDetails podcastId={String(router.query.id)} />;
};

export default PodcastDetailPage;
