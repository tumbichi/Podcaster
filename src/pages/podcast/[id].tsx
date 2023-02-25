import PodcastDetails from "@/Podcasts/features/PodcastDetails";
import { useRouter } from "next/router";
import React from "react";

const PodcastDetailPage = (props) => {
  const router = useRouter();

  
  return <PodcastDetails />;
};

export default PodcastDetailPage;
