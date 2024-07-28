import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Button from "../../button/NormalBtn";

interface PageNumNavProps {
  pageNums: number[];
  pageClickFnc: (item: number) => void;
/*   onFirstPage: () => void;
  onLastPage: () => void; */
}

const PageNumNav = ({
  pageNums,
  pageClickFnc,
/*   onFirstPage,
  onLastPage, */
}: PageNumNavProps) => {

  return (
    <ul className={styles.numNav}>
      <li /* onClick={onFirstPage} */>{"<<"}</li>
      {pageNums.map((item, index) => {
        return (
          <li key={index} onClick={() => pageClickFnc(item)}>
            <Button fnc={() => pageClickFnc(item)}> {item}</Button>
          </li>
        );
      })}
      <li /* onClick={onLastPage} */>{">>"}</li>
    </ul>
  );
};

export default PageNumNav;
