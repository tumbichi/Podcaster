import React, { PropsWithChildren } from "react";
import styles from "./Badge.module.css";

const Badge = ({ children }: PropsWithChildren) => {
  return <div className={styles.container}>{children}</div>;
};

export default Badge;
