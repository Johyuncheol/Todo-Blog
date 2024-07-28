import { RootState } from "@/redux/const";
import { chageTodoState, getTodo } from "@/redux/reducers/todo";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface todoType {
  id: number;
  title: string;
  detail: string;
  isDone: boolean;
  category: string;
  startDate: string;
  endDate: string;
}

const useTodo = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  const [ListData, setListData] = useState<todoType[]>(todos.todo);

  useEffect(() => {
    // 초기 상태 설정을 위해 디스패치
    dispatch(getTodo({ nowPageNum: todos.nowPageNum, nowCategory: todos.nowCategory }));
  }, [dispatch, todos.nowPageNum, todos.nowCategory]);

  useEffect(() => {
    setListData(todos.todo);
  }, [todos.todo]);

  const nowCategory = todos.nowCategory;
  const nowPage = todos.nowPageNum;
  const PageNums = todos.pageNums;

  // 완료/진행중 변경함수
  const isDoneChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    dispatch(chageTodoState({ id, state: e.target.checked }));
  };

  const changeCategoryHandler = (item: string) => {
    dispatch(getTodo({ nowPageNum: todos.nowPageNum, nowCategory: item }));
  };

  // 페이지 번호 변경함수
  const pageNumClickHandler = (item: number) => {
    dispatch(getTodo({ nowPageNum: item, nowCategory: todos.nowCategory }));
  };

  return {
    todos,
    nowCategory,
    nowPage,
    PageNums,
    ListData,
    setListData,
    isDoneChangeHandler,
    changeCategoryHandler,
    pageNumClickHandler
  };
};

export default useTodo;
