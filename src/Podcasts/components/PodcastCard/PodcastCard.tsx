import React from "react";
import styles from "./PodcastCard.module.css";
import Image from "next/image";

interface PodcastCardProps {
  title: string;
  author: string;
  imageUrl: string;
}

const PodcastCard = ({ author, imageUrl, title }: PodcastCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={imageUrl} alt="Podcast image title" fill  sizes="100%"/>
      </div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.author}>Author: {author}</p>
    </div>
  );
};

export default PodcastCard;
