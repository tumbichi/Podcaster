import React from "react";
import Image from "next/image";

import styles from "./PodcastCardDetailed.module.css";

import Card from "@/Core/components/Card/Card";

interface PodcastCardDetailedProps {
  description: string;
  title: string;
  author: string;
  imageUrl: string;
}

const PodcastCardDetailed = ({ description, title, author, imageUrl }: PodcastCardDetailedProps) => {
  return (
    <Card className={styles.container}>
      <div className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <Image className={styles.image} src={imageUrl} alt="Podcast image" fill sizes="100%" />
        </div>
      </div>
      <hr />
      <div className={styles.titleContainer}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.author}>by {author}</p>
      </div>
      <hr />
      <div className={styles.descriptionContainer}>
        <h5>Description: </h5>
        <p className={styles.description}>{description}</p>
      </div>
    </Card>
  );
};

export default PodcastCardDetailed;
