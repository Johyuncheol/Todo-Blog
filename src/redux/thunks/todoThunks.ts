import { createAsyncThunk } from "@reduxjs/toolkit";

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

export const __getTodos = createAsyncThunk(
  "api/todoFetch",
  async (params: { nowPageNum: number; nowCategory: string }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/todos");
      const data = await res.json();

      const showDataNums = 10;
      const firstDataIndex = (params.nowPageNum - 1) * showDataNums;
      const lastDataIndex = params.nowPageNum * showDataNums;
      const Data = data.filter((item: todoType) => {
        if (params.nowCategory !== "all")
          return item.category === params.nowCategory;
        else return item.category === item.category;
      });

      const DataLength = Data.length;
      const pageNumsLength =
        DataLength % showDataNums === 0
          ? DataLength / showDataNums
          : DataLength / showDataNums + 1;

      const resultData = {
        todos: Data.slice(firstDataIndex, lastDataIndex),
        pageNums: Array.from({ length: pageNumsLength }, (_, i) => i + 1),
        nowPageNum: params.nowPageNum,
        nowCategory: params.nowCategory,
      };

      return thunkAPI.fulfillWithValue(resultData);
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(
        error instanceof Error ? error.message : "Unknown error"
      );
    }
  }
);

export const __addTodos = createAsyncThunk(
  "api/addTodo",
  async (params: { newTodo: newTodoType }, thunkAPI) => {
    try {
      console.log(params.newTodo);
      const res = await fetch("http://localhost:4000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(params.newTodo),
      });
      return thunkAPI.fulfillWithValue(params.newTodo);
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(
        error instanceof Error ? error.message : "Unknown error"
      );
    }
  }
);

export const __deleteTodos = createAsyncThunk(
  "api/deleteTodo",
  async (params: { id: string[] }, thunkAPI) => {
    params.id.forEach(async (item) => {
      try {
        const res = await fetch(`http://localhost:4000/todos/${item}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        console.log("error", error);
        return thunkAPI.rejectWithValue(
          error instanceof Error ? error.message : "Unknown error"
        );
      }
    });
  }
);
