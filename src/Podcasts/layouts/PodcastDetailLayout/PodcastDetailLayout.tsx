import React, { ReactNode } from "react";
import styles from "./PodcastDetailLayout.module.css";

interface PodcastDetailLayoutProps {
  children: {
    aside: ReactNode;
    content: ReactNode;
    header: ReactNode;
  };
  isLoading: boolean;
}

const PodcastDetailLayout = ({ children, isLoading }: PodcastDetailLayoutProps) => {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <div></div>
      ) : (
        <>
          <div>{children.aside}</div>
          <div className={styles.contentWrapper}>
            {children.header}
            {children.content}
          </div>
        </>
      )}
    </div>
  );
};

export default PodcastDetailLayout;
