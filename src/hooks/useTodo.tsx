import { AppDispatch, RootState } from "@/redux/const";
import { chageTodoState, selectItem } from "@/redux/reducers/todo";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  __getTodos,
  __addTodos,
  __deleteTodos,
} from "@/redux/thunks/todoThunks";

interface todoType {
  id: string;
  title: string;
  detail: string;
  isDone: boolean;
  category: string;
  startDate: string;
  endDate: string;
}

interface newTodoType {
  title: string;
  detail: string;
  isDone: boolean;
  category: string;
  startDate: string;
  endDate: string;
}

const useTodo = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch<AppDispatch>();
  const [ListData, setListData] = useState<todoType[]>(todos.todo);

  useEffect(() => {
    // 초기 상태 설정을 위해 디스패치
    dispatch(
      __getTodos({
        nowPageNum: todos.nowPageNum,
        nowCategory: todos.nowCategory,
      })
    );
  }, [dispatch, todos.nowPageNum, todos.nowCategory]);

  useEffect(() => {
    setListData(todos.todo);
  }, [todos.todo]);

  const nowCategory = todos.nowCategory;
  const nowPage = todos.nowPageNum;
  const PageNums = todos.pageNums;

  // 완료/진행중 변경함수
  const isDoneChangeHandler = (
    id: string,
    state:boolean
  ) => {
    dispatch(chageTodoState({ id, state }));
  };

  // 카테고리 별 get 함수
  const changeCategoryHandler = (item: string) => {
    dispatch(__getTodos({ nowPageNum: todos.nowPageNum, nowCategory: item }));
  };

  // 페이지 번호 변경함수
  const pageNumClickHandler = (item: number) => {
    dispatch(__getTodos({ nowPageNum: item, nowCategory: todos.nowCategory }));
  };

  // todo 추가 함수
  const addTodoHandler = async(newTodo: newTodoType) => {
    await dispatch(__addTodos({ newTodo }));
    await dispatch(__getTodos({ nowPageNum: todos.nowPageNum, nowCategory: todos.nowCategory }));

  };

  // todo 삭제 함수
  const deleteTodoHandler = async(id: string[]) => {
    if (confirm("삭제 하시겠습니까?")) {
      await dispatch(__deleteTodos({ id }));
      await dispatch(__getTodos({ nowPageNum: todos.nowPageNum, nowCategory: todos.nowCategory }));
    }
  };

  // 아이디값과 일치하는 데이터가져오는 함수
  const getDetail = (id: string) => {
    return todos.todo.find((item) => item.id === id);
  };

  const selectItemHandler = (ids: string[]) => {
    dispatch(selectItem({ ids }));
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
    pageNumClickHandler,
    getDetail,
    addTodoHandler,
    deleteTodoHandler,
    selectItemHandler,
  };
};

export default useTodo;
