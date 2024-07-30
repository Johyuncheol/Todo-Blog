import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todo";
import modalReducer from "./reducers/modal";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
