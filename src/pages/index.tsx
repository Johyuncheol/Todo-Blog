import React from "react";
import styles from "./Home.module.css"
import TodoList from "@/features/todoList";
import BarChart from "@/components/common/chart/BarChart";
import PostCarousel from "@/components/common/carousel/FixedCarousel";

const Home = () => {
  return (
    <div className={styles.main}>
      {/* 메인 상단 투두 & 현황 */}
      <section className={styles.todoSection}>
        <article className={styles.todoList}>
          <TodoList />
        </article>
        <article className={styles.statusChart}>
          <BarChart />
        </article>
      </section>

      {/* 메인 하단 블로그 작성글 슬라이더 */}
      <section className={styles.blogSection}>
        <PostCarousel />
      </section>
    </div>
  );
};

export default Home;
