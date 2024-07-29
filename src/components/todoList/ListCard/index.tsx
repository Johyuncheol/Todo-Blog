import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import useTodo from "@/hooks/useTodo";

interface ListCardProps {
  item: {
    id: number;
    title: string;
    detail: string;
    isDone: boolean;
    category: string;
    startDate: string;
    endDate: string;
  };
  id: number;
}

const ListCard = ({ item, id }: ListCardProps) => {
  const { isDoneChangeHandler } = useTodo();

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

    return ((totalDays-daysPassed) / totalDays) * 100;
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
        checked={item.isDone}
        onChange={(e) => isDoneChangeHandler(e, id)}
      />
      <ul
        className={`${styles.todoCard} ${item.isDone ? styles.done : ""}`}
        style={progressStyle}
      >
        <li className={styles.title}>{item.title}</li>
        <li className={styles.detail}>{item.detail}</li>
      </ul>
    </div>
  );
};

export default ListCard;
