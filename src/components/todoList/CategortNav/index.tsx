"use client";
import React from "react";
import styles from "./index.module.css";
import Button from "@/components/common/button/NormalBtn";

import useModal from "@/hooks/useModal";
import useTodo from "@/hooks/useTodo";

const CategoryNav = () => {
  const deleteTodoHandler = () => {};
  const { nowCategory, changeCategoryHandler } = useTodo();
  const { changeModalState } = useModal();

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
          <Button fnc={() => deleteTodoHandler()}>+</Button>
        </li>
      </ul>

      <ul>
        <li>
          <Button fnc={() => changeModalState()}>추가</Button>
        </li>
        <li>
          <Button fnc={deleteTodoHandler}>삭제</Button>
        </li>
      </ul>
    </nav>
  );
};

export default CategoryNav;
