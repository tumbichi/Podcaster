import React, { PropsWithChildren } from "react";
import styles from "./PodcastsList.module.css";

const PodcastsList = ({ children: podcastsList }: PropsWithChildren) => {
  return <div className={styles.container}>{podcastsList}</div>;
};

export default PodcastsList;
