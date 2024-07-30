import React, { useRef } from "react";
import styles from "./index.module.css";
import useTodo from "@/hooks/useTodo";

const AddForm = () => {
  const { addTodoHandler } = useTodo();
  const formRef = useRef(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const title = formData.get("title") as string;
    const detail = formData.get("detail") as string;
    const category = formData.get("category") as string;
    const startDate = formData.get("startDate") as string;
    const endDate = formData.get("endDate") as string;

    console.log(title,detail)
    if (!title || !category || !detail || !startDate || !endDate) {
      return; 
    }

    const newTodo = {
      title,
      detail,
      isDone: false,
      category,
      startDate,
      endDate,
    };

    addTodoHandler(newTodo);
  };
  return (
    <form className={styles.form} ref={formRef} onSubmit={submitHandler}>
      <label htmlFor="title" className={styles.inputRow}>
        <span>제목 :</span>
        <input type="text" id="title" name="title" />
      </label>

      <label htmlFor="category" className={styles.inputRow}>
        <span>카테고리 :</span>
        <input type="text" id="category" name="category"/>
      </label>

      <label htmlFor="detail" className={styles.inputRow}>
        <span>내용 :</span>
        <textarea id="detail" name="detail"/>
      </label>

      <label htmlFor="startDate" className={styles.inputRow}>
        <span>시작날짜 :</span>
        <input type="date" id="startDate" name="startDate"/>
      </label>

      <label htmlFor="endDate" className={styles.inputRow}>
        <span>끝 날짜 :</span>
        <input type="date" id="endDate" name="endDate"/>
      </label>

      <div className={styles.submitBtnWrap}>
        <button> 추가 </button>
      </div>
    </form>
  );
};

export default AddForm;
