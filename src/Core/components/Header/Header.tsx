import React from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header>
      <h1 className={styles.title}>{title}</h1>
      <hr />
    </header>
  );
};

export default Header;
