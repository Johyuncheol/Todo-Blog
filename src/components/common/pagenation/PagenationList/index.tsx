"use client";
import React, { useState, ReactNode } from "react";
import styles from "./index.module.css";

interface ListBoxProps<T> {
  data: T[];
  children: (item: T, id: string) => ReactNode;
}

interface LeastElements {
  id: string;
}

const PagenationList = <T extends LeastElements>({
  data,
  children,
}: ListBoxProps<T>) => {
  return (
    <article className={styles.listBox}>
      <div>{data.map((item, index) => children(item, item.id))}</div>
    </article>
  );
};

export default PagenationList;
