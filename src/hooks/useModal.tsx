import { RootState } from "@/redux/const";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openModalState, closeModalState } from "@/redux/reducers/modal";

type ModalType = "add" | "delete" | "login" | "register" | "detail";

interface ModalPayload {
  type: ModalType
  id?: string | null;
}

const useModal = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const modalState = useSelector((state: RootState) => state.modal);

  const dispatch = useDispatch();

  const openModalHandler = async ({ type, id = null }: ModalPayload) => {
    await dispatch(openModalState({ type, id }));
  };

  const closeModalHandler = ({ type, id = null }: ModalPayload) => {
    dispatch(closeModalState({ type, id }));
  };

  return {
    modalOpen,
    modalState,
    openModalHandler,
    closeModalHandler,
  };
};

export default useModal;
