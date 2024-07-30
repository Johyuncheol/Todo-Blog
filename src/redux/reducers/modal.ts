import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  id: string | null;
}

interface initialStateType {
  add: ModalState;
  delete: ModalState;
  login: ModalState;
  register: ModalState;
  detail: ModalState;
}
const initialState: initialStateType = {
  add: { isOpen: false, id: null },
  delete: { isOpen: false, id: null },
  login: { isOpen: false, id: null },
  register: { isOpen: false, id: null },
  detail: { isOpen: false, id: null },
};

type ModalType = "add" | "delete" | "login" | "register" | "detail";

interface ModalPayload {
  type: ModalType;
  id: string | null;
}

const modalSlice = createSlice({
  name: "modalReducer",
  initialState,
  reducers: {
    openModalState(state, action: PayloadAction<ModalPayload>) {
      const { type, id } = action.payload;
      console.log(type)
      state[type].isOpen = true;
      state[type].id = id;
    },
    closeModalState(state, action: PayloadAction<ModalPayload>) {
      const { type } = action.payload;
      state[type].isOpen = false;
    },
  },
});

export const { openModalState, closeModalState } = modalSlice.actions;

export default modalSlice.reducer;
