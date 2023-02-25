import React from "react";
import styles from "./PodcastCard.module.css";
import Image from "next/image";
import Card from "@/Core/components/Card/Card";

interface PodcastCardProps {
  title: string;
  author: string;
  imageUrl: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const PodcastCard = ({ author, imageUrl, title, onClick }: PodcastCardProps) => {
  return (
    <Card className={styles.container} onClick={onClick}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={imageUrl} alt="Podcast image title" fill sizes="100%" />
      </div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.author}>Author: {author}</p>
    </Card>
  );
};

export default PodcastCard;
