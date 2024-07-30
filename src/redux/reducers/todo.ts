import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { __addTodos, __getTodos, __deleteTodos } from "../thunks/todoThunks";

interface todoType {
  id: string;
  title: string;
  detail: string;
  isDone: boolean;
  category: string;
  startDate: string;
  endDate: string;
}

interface TodoDataType {
  todo: todoType[];
  pageNums: number[];
  nowPageNum: number;
  nowCategory: string;
  selectedItems: string[];
  isLoading: boolean;
  isError: boolean;
  error?: string;
}

const initialState: TodoDataType = {
  todo: [],
  pageNums: [],
  nowPageNum: 1,
  nowCategory: "all",
  selectedItems: [],
  isLoading: false,
  isError: false,
};

const todoSlice = createSlice({
  name: "todoReducer",
  initialState,
  reducers: {
    selectItem(state, actions) {
      let data = [...state.selectedItems];

      actions.payload.ids.forEach((item: string) => {
        if (state.selectedItems.includes(item)) {
          data = data.filter((element) => element !== item);
        } else {
          data.push(item);
        }
      });

      state.selectedItems = [...data];
    },

    chageTodoState(state, actions) {
      const todoIndex = state.todo.findIndex(
        (todo) => todo.id === actions.payload.id
      );
      if (todoIndex !== -1) {
        state.todo[todoIndex].isDone = actions.payload.state;
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(__getTodos.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__getTodos.fulfilled, (state, action) => {
        state.todo = action.payload.todos;
        state.pageNums = action.payload.pageNums;
        state.nowPageNum = action.payload.nowPageNum;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(__getTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload as string;
      });

    builder
      .addCase(__addTodos.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__addTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        alert("추가되었습니다");
      })
      .addCase(__addTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload as string;
      });

    builder
      .addCase(__deleteTodos.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__deleteTodos.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(__deleteTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload as string;
      });
  },
});

export const { chageTodoState, selectItem } = todoSlice.actions;

export default todoSlice.reducer;
