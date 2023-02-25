import React, { PropsWithChildren } from "react";
import styles from "./FiltersLayout.module.css";

const FiltersLayout = ({ children }: PropsWithChildren) => {
  return <div className={styles.container}>{children}</div>;
};

export default FiltersLayout;
