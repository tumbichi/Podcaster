import React, { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";
import styles from "./Card.module.css";

const Card = ({
  children,
  className,
  ...divProps
}: PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>) => {
  return (
    <div className={`${styles.container} ${className}`} {...divProps}>
      {children}
    </div>
  );
};

export default Card;
