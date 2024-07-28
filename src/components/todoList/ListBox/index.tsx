"use client";
import React from "react";
import styles from "./index.module.css";
import ListCard from "../ListCard";
import PagenationList from "@/components/common/pagenation/PagenationList";
import PageNumNav from "@/components/common/pagenation/PageNumNav";
import useModal from "@/hooks/useModal";
import useTodo from "@/hooks/useTodo";

interface CounterState {
  id: number;
  title: string;
  detail: string;
  isDone: boolean;
  category: string;
  startDate: string;
  endDate: string;
}

const ListBox = () => {
  const { ListData, PageNums, pageNumClickHandler } = useTodo();
  const { modalOpen, changeModalState } = useModal();

  return (
    <article className={styles.listBox}>
      <PagenationList<CounterState>
        modalOpen={modalOpen}
        changeModalState={changeModalState}
        data={ListData}
      >
        {(item, index) => <ListCard key={item.id} item={item} id={item.id} />}
      </PagenationList>
      <PageNumNav pageNums={PageNums} pageClickFnc={pageNumClickHandler} />
    </article>
  );
};

export default ListBox;
