import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  id: number;
  title: string;
  detail: string;
  isDone: boolean;
  category: string;
  startDate: string;
  endDate: string;
}
interface TodoDataType {
  todo: CounterState[];
  pageNums: number[];
}

interface TodoDataTypeA {
  todo: CounterState[];
  pageNums: number[];
  nowPageNum: number;
  nowCategory: string;
}

const data: TodoDataType = {
  todo: [
    {
      id: 1,
      title: "제목1",
      detail: "detail1",
      isDone: false,
      category: "work",
      startDate: "2024-07-28",
      endDate: "2024-07-28",
    },
    {
      id: 2,
      title: "제목2",
      detail: "detail2",
      isDone: true,
      category: "work",
      startDate: "2024-07-24",
      endDate: "2024-08-31",
    },
    {
      id: 3,
      title: "제목3",
      detail: "detail3",
      isDone: false,
      category: "work",
      startDate: "2024-07-24",
      endDate: "2024-07-31",
    },
    {
      id: 4,
      title: "제목4",
      detail: "detail4",
      isDone: false,
      category: "work",
      startDate: "2024-07-26",
      endDate: "2024-07-26",
    },
    {
      id: 5,
      title: "제목5",
      detail: "detail5",
      isDone: true,
      category: "work",
      startDate: "2024-07-26",
      endDate: "2024-07-26",
    },
    {
      id: 6,
      title: "제목6",
      detail: "detail6",
      isDone: false,
      category: "hobby",
      startDate: "2024-07-26",
      endDate: "2024-07-29",
    },
    {
      id: 8,
      title: "제목8",
      detail: "detail8",
      isDone: false,
      category: "hobby",
      startDate: "2024-07-26",
      endDate: "2024-07-26",
    },
    {
      id: 9,
      title: "제목9",
      detail: "detail9",
      isDone: true,
      category: "hobby",
      startDate: "2024-07-26",
      endDate: "2024-07-26",
    },
    {
      id: 10,
      title: "제목10",
      detail: "detail10",
      isDone: false,
      category: "hobby",
      startDate: "2024-07-26",
      endDate: "2024-07-26",
    },
    {
      id: 11,
      title: "제목11",
      detail: "detail11",
      isDone: false,
      category: "hobby",
      startDate: "2024-07-26",
      endDate: "2024-07-26",
    },
    {
      id: 12,
      title: "제목12",
      detail: "detail12",
      isDone: true,
      category: "hobby",
      startDate: "2024-07-26",
      endDate: "2024-07-26",
    },
    {
      id: 13,
      title: "제목13",
      detail: "detail13",
      isDone: false,
      category: "hobby",
      startDate: "2024-07-26",
      endDate: "2024-07-26",
    },
    {
      id: 14,
      title: "제목14",
      detail: "detail14",
      isDone: false,
      category: "hobby",
      startDate: "2024-07-26",
      endDate: "2024-07-26",
    },
  ],
  pageNums: [1, 2, 3, 4, 5, 6, 7],
};

const initialState: TodoDataTypeA = {
  todo: [],
  pageNums: [],
  nowPageNum: 1,
  nowCategory: "all",
};

const todoSlice = createSlice({
  name: "todoReducer",
  initialState,
  reducers: {
    getTodo(state, action) {
      const showDataNums = 10;
      const firstDataIndex = (action.payload.nowPageNum - 1) * showDataNums;
      const lastDataIndex = action.payload.nowPageNum * showDataNums;
      const Data = data.todo.filter((item: CounterState) => {
        if (action.payload.nowCategory !== "all")
          return item.category === action.payload.nowCategory;
        else return item.category === item.category;
      });

      const DataLength = Data.length;
      const pageNumsLength =
        DataLength % showDataNums === 0
          ? DataLength / showDataNums
          : DataLength / showDataNums + 1;

      return {
        ...state,
        todo: Data.slice(firstDataIndex, lastDataIndex),
        pageNums: Array.from({ length: pageNumsLength }, (_, i) => i + 1),
        nowPageNum: action.payload.nowPageNum,
        nowCategory: action.payload.nowCategory,
      };
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
});

export const { getTodo, chageTodoState } = todoSlice.actions;

export default todoSlice.reducer;
