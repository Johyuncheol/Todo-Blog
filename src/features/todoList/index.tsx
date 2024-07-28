"use client";
import React from "react";
import CategoryNav from "@/components/todoList/CategortNav";
import ListBox from "@/components/todoList/ListBox";
import styles from "./index.module.css";
import ReduxProvider from "@/redux/provider/const";

const TodoList = () => {
  return (
    <ReduxProvider>
      <section className={styles.TodoList}>
        <CategoryNav />
        <ListBox />
      </section>
    </ReduxProvider>
  );
};

export default TodoList;
