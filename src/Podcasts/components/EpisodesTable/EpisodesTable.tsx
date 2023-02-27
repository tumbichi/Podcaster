import React from "react";
import styles from "./EpisodesTable.module.css";
import Card from "@/Core/components/Card/Card";

interface EpisodeItem {
  title: string;
  date: string;
  duration: string;
  onClick: () => void;
}

interface PodcastTableProps {
  episodes: EpisodeItem[];
}

const PodcastTable = ({ episodes }: PodcastTableProps) => {
  return (
    <Card className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {episodes.map((episode) => (
            <tr className={styles.rowContainer} key={episode.title + episode.duration + episode.date}>
              <td className={styles.title} onClick={episode.onClick}>
                {episode.title}
              </td>
              <td>{episode.date}</td>
              <td>{episode.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default PodcastTable;
