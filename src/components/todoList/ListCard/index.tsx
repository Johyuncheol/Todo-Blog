import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import useTodo from "@/hooks/useTodo";
import useModal from "@/hooks/useModal";

interface ListCardProps {
  item: {
    id: string;
    title: string;
    detail: string;
    isDone: boolean;
    category: string;
    startDate: string;
    endDate: string;
  };
}

const ListCard = ({ item }: ListCardProps) => {
  const { isDoneChangeHandler, selectItemHandler, todos } = useTodo();
  const { openModalHandler } = useModal();

  const getDateDifferenceInDays = (
    startDate: string,
    endDate: string
  ): number => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const differenceInTime = end.getTime() - start.getTime();
    return Math.ceil(differenceInTime / (1000 * 3600 * 24));
  };

  const getProgressPercentage = (
    startDate: string,
    endDate: string
  ): number => {
    const totalDays = getDateDifferenceInDays(startDate, endDate);
    const today = new Date();
    const daysPassed = getDateDifferenceInDays(
      today.toISOString().split("T")[0],
      endDate
    );

    if (daysPassed < 0) return 100;
    if (daysPassed > totalDays) return 100;
    if (daysPassed === 0 && totalDays === daysPassed) return 100;

    return ((totalDays - daysPassed) / totalDays) * 100;
  };

  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const progressPercentage = getProgressPercentage(
      item.startDate,
      item.endDate
    );
    setPercent(progressPercentage);
  }, [item.startDate, item.endDate]);

  const progressStyle = {
    background: `linear-gradient(to right, #c0e9cc ${percent}%, white 0)`,
  };

  return (
    <div className={styles.card}>
      <input
        className={styles.isDoneCheck}
        type="checkbox"
        checked={todos.selectedItems.includes(item.id)}
        onChange={() => selectItemHandler([item.id])}
      />
      <ul
        className={`${styles.todoCard} ${item.isDone ? styles.done : ""}`}
        style={progressStyle}
        onClick={() => openModalHandler({ type: "detail", id: item.id })}
      >
        <li className={styles.title}>{item.title}</li>
        <li className={styles.detail}>{item.detail}</li>
      </ul>
      <button onClick={() => isDoneChangeHandler(item.id, !item.isDone)}>
        {item.isDone ? "취소" : "완료"}
      </button>
    </div>
  );
};

export default ListCard;
