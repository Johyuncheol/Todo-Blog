import useModal from "@/hooks/useModal";
import React, { Children } from "react";
import styles from "./index.module.css";

type ModalType = "add" | "delete" | "login" | "register" | "detail";

interface ModalFrameProps {
  type: ModalType;
  children: React.ReactNode;
}

const ModalFrame = ({ type, children }: ModalFrameProps) => {
  const { modalState, closeModalHandler, openModalHandler } = useModal();
  return (
    <div className={modalState[type].isOpen ? styles.open : styles.close}>
      <div className={styles.modalInner}>
        <div className={styles.modalHeader}>
          <span> {type} 모달</span>
          <button onClick={() => closeModalHandler({type})}>x</button>
        </div>

        {children}
      </div>
    </div>
  );
};

export default ModalFrame;
