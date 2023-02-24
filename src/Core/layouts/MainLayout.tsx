import React, { PropsWithChildren } from "react";
import styles from "./MainLayout.module.css";
import Header from "../components/Header";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.container}>
      <Header title="Podcaster" />
      {children}
    </div>
  );
};

export default MainLayout;
