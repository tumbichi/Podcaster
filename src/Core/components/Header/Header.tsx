import React from "react";
import styles from "./Header.module.css";
import Loading from "../Loading/Loading";
import Link from "next/link";

interface HeaderProps {
  title: string;
  isLoading: boolean;
}

const Header = ({ title, isLoading }: HeaderProps) => {
  return (
    <header>
      <div className={styles.container}>
        <Link href="/">
          <h1 className={styles.title}>{title}</h1>
        </Link>
        {isLoading && <Loading />}
      </div>
      <hr />
    </header>
  );
};

export default Header;
