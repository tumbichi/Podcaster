import React from "react";
import Card from "@/Core/components/Card/Card";
import styles from "./EpisodeDetail.module.css";

interface EpisodeDetailProps {
  title: string;
  description: string;
  episodeUrl: string;
}

const EpisodeDetail = ({ title, description, episodeUrl }: EpisodeDetailProps) => {
  return (
    <Card className={styles.container}>
      <div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <hr />
      <audio className={styles.player} src={episodeUrl} controls />
    </Card>
  );
};

export default EpisodeDetail;
