import React, { PropsWithChildren } from "react";
import styles from "./MainLayout.module.css";

import { Header } from "../components";
import useLoadingState from "../contexts/LoadingContext/hooks/useLoadingState";

const MainLayout = ({ children }: PropsWithChildren) => {
  const isLoading = useLoadingState();

  return (
    <div className={styles.container}>
      <Header title="Podcaster" isLoading={isLoading} />
      {children}
    </div>
  );
};

export default MainLayout;
