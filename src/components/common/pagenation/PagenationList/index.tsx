"use client";
import React, { useState, ReactNode } from "react";
import styles from "./index.module.css";

interface ListBoxProps<T> {
  modalOpen?: boolean;
  changeModalState: () => void;
  Modal?: React.ComponentType<{ changeModalState: () => void }>;
  data: T[];
  children: (item: T, index: number) => ReactNode;
}

interface LeastElements {
  id: number;
}

const PagenationList = <T extends LeastElements>({
  modalOpen,
  changeModalState,
  Modal,
  data,
  children,
}: ListBoxProps<T>) => {

  return (
    <article className={styles.listBox}>
      {modalOpen && Modal && <Modal changeModalState={changeModalState} />}
      {data.length !== 0 ? (
        <div>{data.map((item, index) => children(item, item.id))}</div>
      ) : (
        <div className={styles.empty}>Todo 추가하기</div>
      )}
    </article>
  );
};

export default PagenationList;
