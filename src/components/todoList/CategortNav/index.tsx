"use client";
import React from "react";
import styles from "./index.module.css";
import Button from "@/components/common/button/NormalBtn";

import useModal from "@/hooks/useModal";
import useTodo from "@/hooks/useTodo";

const CategoryNav = () => {
  const { nowCategory, changeCategoryHandler, deleteTodoHandler, todos } =
    useTodo();
  const { openModalHandler } = useModal();

  const categoryData: [string, string][] = [
    ["all", "전체"],
    ["work", "일"],
    ["exercise", "운동"],
    ["hobby", "취미"],
  ];

  return (
    <nav className={styles.todoCategory}>
      <ul>
        {categoryData.map(([item, label], index) => {
          return (
            <li key={index}>
              <Button
                fnc={() => changeCategoryHandler(item)}
                state={item === nowCategory}
              >
                {label}
              </Button>
            </li>
          );
        })}

        <li>
          <Button fnc={() => console.log()}>+</Button>
        </li>
      </ul>

      <ul>
        <li>
          <Button fnc={() => openModalHandler({ type: "add" })}>추가</Button>
        </li>
        <li>
          <Button fnc={() => deleteTodoHandler(todos.selectedItems)}>
            삭제
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default CategoryNav;
