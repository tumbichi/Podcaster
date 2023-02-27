import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import Image from "next/image";

import styles from "./PodcastCardDetailed.module.css";

import Card from "@/Core/components/Card/Card";

interface PodcastCardDetailedProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  description: string;
  title: string;
  author: string;
  imageUrl: string;
}

const PodcastCardDetailed = ({
  description,
  title,
  author,
  imageUrl,
  className,
  ...divProps
}: PodcastCardDetailedProps) => {
  return (
    <Card className={`${styles.container} ${className}`} {...divProps}>
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
        <div className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </Card>
  );
};

export default PodcastCardDetailed;
