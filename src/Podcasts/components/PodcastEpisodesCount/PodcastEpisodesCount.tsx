import React from "react";
import styles from "./PodcastEpisodesCount.module.css";
import Card from "@/Core/components/Card/Card";

interface PodcastEpisodesCountProps {
  count: number;
}

const PodcastEpisodesCount = ({ count }: PodcastEpisodesCountProps) => {
  return (
    <Card className={styles.container}>
      <h2>Episodes: {count}</h2>
    </Card>
  );
};

export default PodcastEpisodesCount;
